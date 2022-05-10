namespace gateway_service.Models
{
    public class LapTime
    {
        public int raceId { get; set; }
        public int year { get; set; }
        public int round { get; set; }
        public int circuitId { get; set; }
        public string? race_name { get; set; }
        public string? date { get; set; }
        public double race_time { get; set; }
        public string? ciruit_name { get; set; }
        public string? location { get; set; }
        public string? country { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
        public int driverId { get; set; }
        public string? forename { get; set; }
        public string? surname { get; set; }
        public string? nationality { get; set; }
        public int lap { get; set; }
        public int position { get; set; }
        public double lap_time { get; set; }
    }
}
