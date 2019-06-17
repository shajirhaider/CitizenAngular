using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace RA.AMANDA.Portal.UIFWNG.Utility
{
    public class Validator
    {
        public static bool IsEmailValid(string inputEmail)
        {
            string strRegex = @"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                  @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                  @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
            Regex re = new Regex(strRegex);
            if (re.IsMatch(inputEmail))
            {
                return (true);
            }
            else
            {
                return (false);
            }
        }

        public static bool IsPostalCodeValid(string postalCode)
        {
            string strRegex = @"^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\d[ABCEGHJKLMNPRSTVWXYZ]\d$";
            Regex re = new Regex(strRegex);
            if (re.IsMatch(postalCode))
            {
                return (true);
            }
            else
            {
                return (false);
            }
        }


        

        /// <summary>
        /// Validate token
        /// </summary>
        /// <param name="tokenEncrypted"></param>
        /// <returns></returns>
        public static bool ValidateToken(string tokenEncrypted, ref string loginOID)
        {

            bool isValidated = true;

            string tokenDecrypted = Encryption.DecryptToken(tokenEncrypted);

            if(string.IsNullOrEmpty(tokenDecrypted))
            {
                return false;
            }

            string[] hridChunks = tokenDecrypted.Split('|');

            //if chunk size is not 3
            if (hridChunks.Length != 3)
            {
                Logging.LogInfo("   token is not in correct format(1). hridChunks.Length !=3. tokenEncrypted : " + tokenEncrypted + " - tokenDecrypted : " + tokenDecrypted);
                return false;
            }

            int tokenDuration = 6;
            tokenDuration = Utility.UIHelper.TokenDuration;

            //check requested date time
            DateTime requestDate = DateTime.ParseExact(hridChunks[2], Constants.TOKEN_DATE_FORMAT, System.Globalization.CultureInfo.InvariantCulture);
            if (requestDate.AddHours(tokenDuration) < DateTime.Now)
            {
                Logging.LogInfo("   token generated more than "+ tokenDuration.ToString() + " hr before. request datetime:" + requestDate.ToString());
                return false;
            }

            string tokenPart1 = "RA";
            tokenPart1 = Utility.UIHelper.TokenPart1;

            //check if token exists in DB. for now just hardcoded
            if (hridChunks[0] != tokenPart1)
            {
                Logging.LogInfo("   requested tokenPart1 is not valid. tokenEncrypted : " + tokenEncrypted + " - tokenDecrypted : " + tokenDecrypted);
                return false;
            }

            loginOID = hridChunks[1];
            Logging.LogInfo("   tokenEncrypted : " + tokenEncrypted + " - tokenDecrypted : " + tokenDecrypted);

            return isValidated;

        }
        /// <summary>
        /// Validate request url
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public static bool ValidateRequestUrl(string url)
        {
            bool isValidated = true;

            List<string> urlList = AcceptedUrlList();

            foreach (string s in urlList)
            {
                if (s.ToLower().Trim() == url.ToLower().Trim() || s.ToLower().Trim().Contains(url.ToLower().Trim()))
                {
                    isValidated = true;
                    break;
                }
            }

            Logging.LogInfo("   ValidateRequestUrl:" + isValidated.ToString() + ", request url:" + url);

            return isValidated;
        }

        /// <summary>
        /// Get accepted url request
        /// </summary>
        /// <returns></returns>
        static List<string> AcceptedUrlList()
        {
            List<string> dataList = new List<string>();

            dataList = UIHelper.AcceptedUrlList;
            /*
            dataList.Add("localhost");
            dataList.Add("online.cambridge.ca");
            dataList.Add("192.168.2.12");
            */

            return dataList;
        }

        static List<string> AcceptedIMEIList()
        {
            List<string> dataList = new List<string>();

            dataList = UIHelper.AcceptedIMEIList;
            /*
            dataList.Add("localhost");
            dataList.Add("online.cambridge.ca");
            dataList.Add("192.168.2.12");
            */

            return dataList;
        }
    }
}