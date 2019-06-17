using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using log4net;

namespace RA.AMANDA.Portal.UIFWNG.Utility
{
    public static class Logging
    {
        private static ILog Logger
        {
            get
            {
                return _Logger;
            }
        }
        private static log4net.ILog _Logger = log4net.LogManager.GetLogger("Amanda.Portal");

        /// <summary>
        /// Log the Info in UI
        /// </summary>
        /// <param name="ex"></param>
        public static void LogInfo(string ex)
        {
            //log the error
            Logger.Info(ex);
        }

        /// <summary>
        /// Log the Debug in UI
        /// </summary>
        /// <param name="ex"></param>
        public static void LogDebug(string ex)
        {
            //log the error
            Logger.Debug(ex);
        }

        /// <summary>
        /// Log the exception in UI
        /// </summary>
        /// <param name="ex"></param>
        public static void LogThis(string ex)
        {
            //log the error
            Logger.Error(ex);
        }

        /// <summary>
        /// Log the exception in UI and add a guid in exception
        /// </summary>
        /// <param name="ex"></param>
        public static void LogThis(Exception ex)
        {
            //get the errorGUID from the exception
            string g = AddErrorGUID_ToException(ex);

            //log the error
            Logger.Error("Error GUID:" + g, ex);
        }

        /// <summary>
        /// Log the exception in UI and add a guid in exception
        /// </summary>
        /// <param name="oid">OID of the object</param>
        /// <param name="ex"></param>
        public static void LogThis(string oid, Exception ex)
        {
            //get the errorGUID from the exception
            string g = AddErrorGUID_ToException(ex);

            //log the error
            Logger.Error("Error GUID:" + g + " OID:" + oid, ex);
        }

        /// <summary>
        /// Log the exception in UI and add a guid in exception
        /// </summary>
        /// <param name="oid">OID of the object</param>
        /// <param name="ex"></param>
        public static void LogFatal(string oid, Exception ex)
        {
            //log the error
            Logger.Fatal(oid, ex);
        }

        public static void LogError(Exception ex)
        {
            //Log the error, give it a unique ID, re-throw so it can bubble up.
            string g = "";
            if (ex.GetBaseException().Data["ErrorGUID"] != null)
            {
                g = ex.GetBaseException().Data["ErrorGUID"].ToString();
            }
            else if (ex.Data["ErrorGUID"] != null)
            {
                g = ex.Data["ErrorGUID"].ToString();
            }
            else
            {
                g = Guid.NewGuid().ToString();
                ex.Data.Add("ErrorGUID", g); //Add this GUID to the exception so layers above can pull it out and we can track the error over layers via the log file
            }

            Logger.Error("Error GUID:" + g, ex);//log the error

        }

        /// <summary>
        /// get the Error GUID from the exception if any. Else add one
        /// </summary>
        /// <param name="ex"></param>
        static string AddErrorGUID_ToException(Exception ex)
        {
            string g = null;
            if (ex.GetBaseException().Data["ErrorGUID"] != null)
            {
                g = ex.GetBaseException().Data["ErrorGUID"].ToString();
            }
            else
            {
                g = Guid.NewGuid().ToString();
                ex.Data.Add("ErrorGUID", g); //Add this GUID to the exception so layers above can pull it out
            }

            return g;
        }

    }
}
