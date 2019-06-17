using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RA.AMANDA.Portal.UIFWNG.MasterPages
{
    public partial class Pub : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ApplySecurity();

            FillClass();
        }

        void FillClass()
        {
            string pg = "";

            pg= this.Parent.Page.GetType().Name.ToLower();

            Utility.Logging.LogDebug(pg);
            
            if(pg== "pub_default_aspx")
            {
                aHome.Attributes["class"] = "current"; 
            }
            else if (pg == "pub_search_aspx")
            {
                aSearch.Attributes["class"] = "current";
            }
        }

        void ApplySecurity()
        {
            string serviceURL = "";

            //get the webservice url from web.config
            serviceURL = Utility.UIHelper.ServiceURL;

            string token = "1234";
            

            token = Utility.Encryption.GenerateEncryptedToken(token);

            //--TODO. test code
            token = "amandaportal";

            string tokenScript = "";

            tokenScript = @"
                    <script>
                        var requestData = {{
	                        token: '" + token + "'" + @"
                        }};
                        var ServiceURL = '{0}';" + @"
                    </script>
                    ";
            
            //var ServiceURL2 = '{1}'; " + @"

            tokenScript = string.Format(tokenScript, serviceURL);


            literalToken.Text = tokenScript;

            
        }

    }
}