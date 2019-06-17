using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RA.AMANDA.Portal.UIFW.MasterPages
{
    public partial class Test : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ApplySecurity();
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