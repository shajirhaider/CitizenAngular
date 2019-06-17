using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RA.AMANDA.Portal.UIFWNG.Utility
{
    public class UIHelper
    {

        #region "App settings"

        public static bool UserLiveESolution
        {

            get
            {
                string _UserLiveESolution = "N";

                try
                {
                    _UserLiveESolution = System.Configuration.ConfigurationManager.AppSettings["UserLiveESolution"].ToString();
                }
                catch
                {
                    _UserLiveESolution = "Y";
                }

                return _UserLiveESolution == "Y" ? true : false;
            }
        }

        public static string ESolutionUrl
        {

            get
            {
                string _ESolutionUrl = "http://cambridge.icreate7.esolutionsgroup.ca/";

                try
                {
                    _ESolutionUrl = System.Configuration.ConfigurationManager.AppSettings["ESolutionUrl"].ToString();
                }
                catch
                {
                    _ESolutionUrl = "http://cambridge.icreate7.esolutionsgroup.ca/";
                }

                return _ESolutionUrl;
            }
        }

        public static string SecurityToken
        {

            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["SecurityToken"].ToString();
            }
        }

        public static List<string> AcceptedUrlList
        {

            get
            {
                List<string> urlList = new List<string>();
                try
                {
                    string AcceptedUrlList = System.Configuration.ConfigurationManager.AppSettings["AcceptedUrlList"].ToString();
                    if (!string.IsNullOrEmpty(AcceptedUrlList))
                    {
                        urlList = AcceptedUrlList.Split('|').ToList();
                    }
                }
                catch (Exception ex)
                {
                    Logging.LogThis(ex);
                    urlList = new List<string>();
                }



                return urlList;
            }

        }

        public static List<string> AcceptedIMEIList
        {

            get
            {
                List<string> urlList = new List<string>();
                try
                {
                    string AcceptedUrlList = System.Configuration.ConfigurationManager.AppSettings["AcceptedIMEIList"].ToString();
                    if (!string.IsNullOrEmpty(AcceptedUrlList))
                    {
                        urlList = AcceptedUrlList.Split('|').ToList();
                    }
                }
                catch (Exception ex)
                {
                    Logging.LogThis(ex);
                    urlList = new List<string>();
                }



                return urlList;
            }

        }

        public static string EncryptionKey
        {

            get
            {
                string _val = "ra_12345678910";

                try
                {
                    _val = System.Configuration.ConfigurationManager.AppSettings["EncryptionKey"].ToString();
                }
                catch
                {
                    _val = "ra_12345678910";
                }

                return _val;
            }
        }

        public static string EncryptionSalt
        {

            get
            {
                string _val = "0x1234567812345678";

                try
                {
                    _val = System.Configuration.ConfigurationManager.AppSettings["EncryptionSalt"].ToString();
                }
                catch
                {
                    _val = "0x1234567812345678";
                }

                return _val;
            }
        }

        public static string TokenPart1
        {

            get
            {
                string _val = "RA";

                try
                {
                    _val = System.Configuration.ConfigurationManager.AppSettings["TokenPart1"].ToString();
                }
                catch
                {
                    _val = "RA";
                }

                return _val;
            }
        }

        public static int TokenDuration
        {

            get
            {
                int _val = 6;

                try
                {
                    _val = ConvertToInteger(System.Configuration.ConfigurationManager.AppSettings["TokenDuration"].ToString());
                }
                catch
                {
                    _val = 6;
                }

                return _val;
            }
        }

        public static string GeneralUserLoginOID
        {

            get
            {
                string _val = "L00003";

                try
                {
                    _val = System.Configuration.ConfigurationManager.AppSettings["GeneralUserLoginOID"].ToString();
                }
                catch
                {
                    _val = "L00003";
                }

                return _val;
            }
        }

        public static bool IsTestMode
        {

            get
            {
                string _TestMode = "N";

                try
                {
                    _TestMode = System.Configuration.ConfigurationManager.AppSettings["TestMode"].ToString();
                }
                catch
                {
                    _TestMode = "N";
                }

                return _TestMode == "Y" ? true : false;
            }
        }

        public static bool IsSiteUnderMaintenance
        {

            get
            {
                string _IsSiteUnderMaintenance = "N";

                try
                {
                    _IsSiteUnderMaintenance = System.Configuration.ConfigurationManager.AppSettings["IsSiteUnderMaintenance"].ToString();
                }
                catch
                {
                    _IsSiteUnderMaintenance = "N";
                }

                return _IsSiteUnderMaintenance == "Y" ? true : false;
            }
        }


        public static string AuthMode
        {

            get
            {
                string _val = "DB";

                try
                {
                    _val = System.Configuration.ConfigurationManager.AppSettings["AuthMode"].ToString();
                }
                catch
                {
                    _val = "DB";
                }

                return _val;
            }
        }


        #endregion

        #region "Public Authentication for service and url"

        public static string PublicUsername
        {

            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["PublicUsername"].ToString();
            }
        }

        public static string PublicPassword
        {

            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["PublicPassword"].ToString();
            }
        }

        public static string ServiceURL
        {

            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["ServiceURL"].ToString();
            }
        }


        #endregion

        public static string ServerUrl(System.Web.HttpRequest Request)
        {
            string protocol;

            if (HttpContext.Current.Request.IsSecureConnection)
                protocol = "https";
            else
                protocol = "http";

            System.Text.StringBuilder uri = new System.Text.StringBuilder(protocol + "://");

            string hostname = HttpContext.Current.Request.Url.Host;

            uri.Append(hostname);

            int port = HttpContext.Current.Request.Url.Port;

            if (port != 80 && port != 443)
            {
                uri.Append(":");
                uri.Append(port.ToString());
            }

            //string subDirectoryName = WebUIHelper.AppSettings.SubDirectoryName;
            string subDirectoryName = Request.ApplicationPath.TrimStart(new Char[] { '/' });

            if (!string.IsNullOrEmpty(subDirectoryName))
            {
                uri.Append("/");
                uri.Append(subDirectoryName);
            }


            return uri.ToString();
        }

        public static byte[] StringToByteArray(String s)
        {
            List<byte> byteList = new List<byte>();
            string hexPart = s.Substring(2);
            for (int i = 0; i < hexPart.Length / 2; i++)
            {
                string hexNumber = hexPart.Substring(i * 2, 2);
                byteList.Add((byte)Convert.ToInt32(hexNumber, 16));
            }
            return byteList.ToArray();
        }

        

        public static DateTime MakeDateTimeFromString(string datestring, string timestring)
        {
            DateTime dt = DateTime.Now;

            string datetimestring = datestring + " " + timestring;
            string datetimeformat = "yyyy-MM-dd HH:mm";


            try
            {
                System.Globalization.CultureInfo MyCultureInfo = new System.Globalization.CultureInfo("en-US");
                dt = DateTime.ParseExact(datetimestring, datetimeformat, MyCultureInfo);
            }
            catch (Exception ex)
            {
                Logging.LogDebug("couldn't parse the date:"+ datetimestring+"|format:"+ datetimeformat);
                Logging.LogThis(ex); 

                dt = DateTime.Now;
            }
            return dt;  
        }


        public static int ConvertToInteger(object obj)
        {
            int rslt = 0;
            try
            {
                rslt = Convert.ToInt32(obj);
            }
            catch { }
            return rslt;
        }



        public enum CookieName
        {
            /// <summary>
            /// Logged In Login ID
            /// </summary>
            CurrentLoginType,
            /// <summary>
            /// Logged In User ID
            /// </summary>
            CurrentLoginOID,
            /// <summary>
            /// Logged In User full name
            /// </summary>
            CurrentGuestOID,
            CurrentRoleOID,
            CurrentStaffOID,
            CurrentLoginName,
            CurrentLoginFullName,
            CurrentLoginEmail
        }
    }
}