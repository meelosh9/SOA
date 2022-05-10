namespace gateway_service.Helpers
{
    public class Helper
    {   
        public string TrimDate(string date)
        {
            string[] sub = date.Split(' ');
            if(!sub[0].StartsWith('1'))
                sub[0] = "0"+sub[0];
            DateTime dateTime = Convert.ToDateTime(sub[0]);
            string dateString = dateTime.ToString("yyyy-MM-dd");
            return dateString;
        }
        public string  LapTime(double time)
        {
            TimeSpan t =  TimeSpan.FromSeconds(time*24*3600);
            return string.Format("{1:D2}m:{2:D2}s:{3:D3}ms",
                t.Minutes,
                t.Seconds,
                t.Milliseconds);
        }
        public string StartTime(double time)
        {
            TimeSpan t = TimeSpan.FromSeconds(time * 24 * 3600);
            return TimeOnly.FromTimeSpan(t).ToShortTimeString();
        }
    }
}
