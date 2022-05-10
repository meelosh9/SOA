using Microsoft.AspNetCore.Mvc;
using gateway_service.Models;
using gateway_service.Helpers;
using Newtonsoft.Json;
using System.Text;

namespace gateway_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GatewayController : ControllerBase
    {


        private readonly ILogger<GatewayController> _logger;

        public GatewayController(ILogger<GatewayController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetLapTimeWeatherForecast")]
        public async Task<IActionResult> GetLapTimeWeatherForecast(int driverId, int raceId, int lap)
        {

            LapTimeWeather data = new LapTimeWeather();
            data.weather = new WeatherInfo();
            Helper Helper = new Helper();
            string key = "E55NHQU5F8PSQGMST6WL8ACUD";
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync($"http://localhost:5000/api/lap_time/GetLapTime/?raceId={raceId}&driverId={driverId}&lap={lap}"))
                {

                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var lt = await response.Content.ReadFromJsonAsync<LapTime>();
                        data.lapTime = lt;
                        using (var responseWeather = await httpClient.GetAsync($"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{lt.lat}%2C{lt.lng}/{data.lapTime.date}/{data.lapTime.date}?unitGroup=us&include=hours%2Cevents&key={key}&contentType=json"))
                        {
                            if (responseWeather.StatusCode == System.Net.HttpStatusCode.OK)
                            {
                                var body = await responseWeather.Content.ReadAsStringAsync();

                                dynamic weather = JsonConvert.DeserializeObject(body);
                                dynamic day = weather.days[0];

                                data.weather.temp = day.temp;
                                data.weather.humidity = day.humidity;
                                data.weather.precip = day.precip;
                                data.weather.precipprob = day.precipprob;
                                data.weather.precipcover = day.precipcover;
                                //data.weather.preciptype = day.preciptype;
                                return Ok(data);

                            }
                            else if (responseWeather.StatusCode == System.Net.HttpStatusCode.NotFound)
                            {
                                var errorResponse = await responseWeather.Content.ReadAsStringAsync();
                                return NotFound(errorResponse);
                            }
                            else if (responseWeather.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                            {

                                return StatusCode(500);
                            }
                            else
                            {
                                return BadRequest();
                            }
                        }

                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                    {
                        var errorResponse = await response.Content.ReadAsStringAsync();
                        return NotFound(errorResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                    {
                        //var errorResponse = await response.Content.ReadAsStringAsync();
                        return StatusCode(500);
                    }
                    else
                    {
                        return BadRequest();
                    }
                }

            }
            return Ok();
        }
        [HttpPost(Name = "AddLapTime")]
        public async Task<IActionResult> AddLapTime([FromBody] LapTime lt)
        {
            using (var httpClient = new HttpClient())
            {
                var serializedObject = JsonConvert.SerializeObject(lt);
                var content = new StringContent(serializedObject, Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync("http://localhost:5000/api/lap_time/AddLapTime/", content))
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var apiResponse = await response.Content.ReadAsStringAsync();
                        return Ok(apiResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                    {
                        var errorResponse = await response.Content.ReadAsStringAsync();
                        return NotFound(errorResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                    {
                        return StatusCode(500);
                    }

                }

                return BadRequest();
            }

        }
        [HttpPut(Name = "UpdateLapTime")]
        public async Task<IActionResult> UpdateLapTime([FromBody] LapTime lt)
        {
            using (var httpClient = new HttpClient())
            {
                var serializedObject = JsonConvert.SerializeObject(lt);
                var content = new StringContent(serializedObject, Encoding.UTF8, "application/json");
                using (var response = await httpClient.PutAsync("http://localhost:5000/api/lap_time/UpdateLapTime/?raceId={raceId}&driverId={driverId}&lap={lap}", content))
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var apiResponse = await response.Content.ReadAsStringAsync();
                        return Ok(apiResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                    {
                        var errorResponse = await response.Content.ReadAsStringAsync();
                        return NotFound(errorResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                    {
                        return StatusCode(500);
                    }

                }

                return BadRequest();
            }
        }
        [HttpDelete(Name = "DeleteLapTime")]
        public async Task<IActionResult> DeleteLapTime(int driverId, int raceId, int lap)
        {
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.DeleteAsync($"http://localhost:5000/api/lap_time/DeleteLapTime/?raceId={raceId}&driverId={driverId}&lap={lap}"))
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var apiResponse = await response.Content.ReadAsStringAsync();
                        return Ok(apiResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                    {
                        var errorResponse = await response.Content.ReadAsStringAsync();
                        return NotFound(errorResponse);
                    }
                    else if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                    {
                        return StatusCode(500);
                    }

                }

                return BadRequest();
            }
        }
    }
}