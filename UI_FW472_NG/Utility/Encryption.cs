using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;
using System.IO;

namespace RA.AMANDA.Portal.UIFWNG.Utility
{
    public static class Encryption
    {
        public static string EncryptToken(string token)
        {
            string encString = "";

            token = token + "|" + DateTime.Now.ToString(Constants.TOKEN_DATE_FORMAT);

            encString = EncryptString(token);

            return encString;
        }

        public static string DecryptToken(string encString)
        {
            string token = "";
            try
            {
                token = DecryptString(encString);
            }
            catch (Exception ex)
            {
                Logging.LogError(ex); 
            }

            return token;
        }

        public static string EncryptString(string input)
        {
            string key = UIHelper.EncryptionKey;
            string salt = UIHelper.EncryptionSalt;

            string result = EncryptString(input, key, UIHelper.StringToByteArray(salt));

            return result;
        }

        public static string DecryptString(string input)
        {
            string key = UIHelper.EncryptionKey;
            string salt = UIHelper.EncryptionSalt;

            string result = DecryptString(input, key, UIHelper.StringToByteArray(salt));
            return result;
        }

        public static string EncryptString(string input, string key, byte[] salt)
        {

            // Get the bytes of the string
            byte[] bytesToBeEncrypted = Encoding.UTF8.GetBytes(input);
            byte[] passwordBytes = Encoding.UTF8.GetBytes(key);

            // Hash the password with SHA256
            passwordBytes = SHA256.Create().ComputeHash(passwordBytes);

            byte[] bytesEncrypted = AES_Encrypt(bytesToBeEncrypted, passwordBytes, salt);

            string result = Convert.ToBase64String(bytesEncrypted);

            return result;
        }

        

        public static string DecryptString(string input, string key, byte[] salt)
        {
            input = input.Replace(' ', '+');

            // Get the bytes of the string
            byte[] bytesToBeDecrypted = Convert.FromBase64String(input);
            byte[] passwordBytes = Encoding.UTF8.GetBytes(key);
            passwordBytes = SHA256.Create().ComputeHash(passwordBytes);

            byte[] bytesDecrypted = AES_Decrypt(bytesToBeDecrypted, passwordBytes, salt);

            string result = Encoding.UTF8.GetString(bytesDecrypted);

            return result;
        }

        
        private static byte[] AES_Encrypt(byte[] bytesToBeEncrypted, byte[] keyBytes, byte[] salt)
        {
            byte[] encryptedBytes = null;


            using (MemoryStream ms = new MemoryStream())
            {
                using (RijndaelManaged AES = new RijndaelManaged())
                {
                    AES.KeySize = 256;
                    AES.BlockSize = 128;

                    var key = new Rfc2898DeriveBytes(keyBytes, salt, 1000);
                    AES.Key = key.GetBytes(AES.KeySize / 8);
                    AES.IV = key.GetBytes(AES.BlockSize / 8);

                    AES.Mode = CipherMode.CBC;

                    using (var cs = new CryptoStream(ms, AES.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(bytesToBeEncrypted, 0, bytesToBeEncrypted.Length);
                        cs.Close();
                    }
                    encryptedBytes = ms.ToArray();
                }
            }

            return encryptedBytes;
        }


        private static byte[] AES_Decrypt(byte[] bytesToBeDecrypted, byte[] keyBytes, byte[] salt)
        {
            byte[] decryptedBytes = null;

            using (MemoryStream ms = new MemoryStream())
            {
                using (RijndaelManaged AES = new RijndaelManaged())
                {
                    AES.KeySize = 256;
                    AES.BlockSize = 128;

                    var key = new Rfc2898DeriveBytes(keyBytes, salt, 1000);
                    AES.Key = key.GetBytes(AES.KeySize / 8);
                    AES.IV = key.GetBytes(AES.BlockSize / 8);

                    AES.Mode = CipherMode.CBC;

                    using (var cs = new CryptoStream(ms, AES.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(bytesToBeDecrypted, 0, bytesToBeDecrypted.Length);
                        cs.Close();
                    }
                    decryptedBytes = ms.ToArray();
                }
            }

            return decryptedBytes;
        }


        public static string GenerateEncryptedToken(string input)
        {
            string tokenPart1 = "RA";
            tokenPart1 = Utility.UIHelper.TokenPart1;

            string token = tokenPart1;
            token += "|" + input;

            token = Utility.Encryption.EncryptToken(token);

            return token;
        }

    }
}