using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace RA.AMANDA.Portal.UIFW
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            log4net.Config.XmlConfigurator.Configure();
            Utility.Logging.LogInfo(">>>>>>>>>>Application Starting");

        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Utility.Logging.LogDebug("Session Starting for SessionID: " + Session.SessionID.ToString());
        }


        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            EnableCrossDomainAjaxCall();

        }

        /// <summary>
        /// For cross domain request
        /// </summary>
        private void EnableCrossDomainAjaxCall()
        {
            //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:1232");
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                HttpContext.Current.Response.AddHeader("Cache-Control", "no-cache");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
                HttpContext.Current.Response.End();
            }
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            //Get the base (root cause) error:
            Exception ex = this.Server.GetLastError(); //Not getting the base error because we want to know exactly where the error originated from in the UI.  For eg: If it was DAL error it would have bubbled up to a page in the UI, and we want to know where that is.  DAL would have inserted the ErrorGUID so we can look at DAL errors to see what caused it there.

            //If the base error was re-thrown and bubbled up then we would have inserted an ErrorGUID already so we can reuse that for consistent tracking. Otherwise just create a new errorguid.
            string errorGUID = null;
            if (ex.GetBaseException().Data["ErrorGUID"] != null)
                errorGUID = ex.GetBaseException().Data["ErrorGUID"].ToString();
            else
                errorGUID = Guid.NewGuid().ToString();


            //No need to log common HTTP errors (404,402,etc) so only log it as debug.  All others are fatal.
            if ((ex is HttpException) && ((HttpException)(ex)).GetHttpCode() != 500)
                Utility.Logging.LogFatal("System HttpException:" + errorGUID + " | HttpCode:" + ((HttpException)ex).GetHttpCode().ToString(), ex);

            else
                //Log this error as Fatal because it was wasn't caught anywhere:
                Utility.Logging.LogFatal("System Unhandled Error:" + errorGUID, ex);


            //Redirect to our custom error UI page if web.config is set that way, otherwise the ugly yellow asp.net error page gets shown
            /*
            if (BLL.AppSettings.IsCustomErrorPageEnabled)
                Server.Transfer("~/pub/errorPages/UnhandledError.aspx?errorguid=" + errorGUID + "&httperrorcode=" + ((HttpException)ex).GetHttpCode().ToString());
            */
        }

        protected void Session_End(object sender, EventArgs e)
        {
            Utility.Logging.LogDebug("Session has ended for SessionID: " + Session.SessionID.ToString());
        }

        protected void Application_End(object sender, EventArgs e)
        {
            Utility.Logging.LogInfo("<<<<<<<<<<Application Ending");
        }

    }
}