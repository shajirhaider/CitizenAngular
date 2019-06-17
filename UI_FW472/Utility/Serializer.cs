using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Newtonsoft.Json;

namespace RA.AMANDA.Portal.UIFW.Utility
{
    public class Serializer
    {
        static JavaScriptSerializer serializer = new JavaScriptSerializer();

        public static string ObjectToJSON(Object dataList)
        {
            string json = ""; ;

            try
            {
                json = serializer.Serialize(dataList);
                //json = Newtonsoft.Json.JsonConvert.SerializeObject(dataList);

            }
            catch (Exception ex)
            {
                Logging.LogThis(ex);
            }

            return json;
        }

    }
}