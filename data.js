const data = [
  {
    title: "Gmap Tools",
    details: "Measure, rotate, and zoom to scale on Google Maps",
    photo: "./assets/projects/gmaptools.png",
    tags: "Google Maps, JS, Paperjs",
    live: "https://gmaptools.now.sh/",
    github: "https://github.com/mfowlerfinn/gmapsTools"
  },
  {
    title: "Mealizer",
    details: "Meal and grocery planner for fast meal planning",
    photo: "./assets/projects/mealizer.png",
    tags: "React, JS, MaterialUI",
    live: "https://mealizer.now.sh/",
    github: "https://github.com/mfowlerfinn/mealizer"
  },
  {
    title: "Calculator",
    details: "Pretty-print calculator PWA with logging, fraction conversion, and other handy stuff.",
    photo: "./assets/projects/calc.png",
    tags: "React, JS, HTML, CSS",
    live: "https://calculator.mattfowlerfinn.now.sh/",
    github: "https://github.com/mfowlerfinn/calculator-web-app"
  },
  {
    title: "Big Zillow Map",
    details: "Published Web Extension for Firefox to make Zillow.com more useable.",
    photo: "./assets/projects/zillow-big-map.png",
    tags: "JS, HTML, CSS",
    live: "https://addons.mozilla.org/en-US/firefox/addon/big-map-zillow/",
    github: "https://github.com/mfowlerfinn/big-zillow-map"
  },
  {
    title: "ISP speed logger",
    details:
      "Plots sampled data from Firebase using Plotly, local server samples ISP speed",
    photo: "./assets/projects/isp-logger.png",
    tags: "Svelte, JS, Firebase, Plotly.js",
    live: "https://svelte.mattfowlerfinn.now.sh/"
  },
  {
    title: "Envelope Labeler",
    details:
      "Webapp that outputs PDF envelopes from CSV input (client-side)",
    photo: "./assets/projects/envelope.png",
    tags: "JS, HTML, CSS, Webpack, pdfkit",
    live: "https://mfowlerfinn.github.io/envelope_generator/",
    github: "https://github.com/mfowlerfinn/envelope_generator/"
  },
  {
    title: "Weather UVI webpage",
    details: "This web app shows the current weather along with the UV index.",
    photo: "./assets/projects/uvi_weather.png",
    tags: "JS, HTML, CSS",
    live: "https://mfowlerfinn.github.io/weather-uvi-webpage/",
    github: "https://github.com/mfowlerfinn/weather-uvi-webpage"
  },
  {
    title: "Away timer webapp",
    details: "Timer to show when you'll be back",
    photo: "./assets/projects/web_timer.png",
    tags: "JS, HTML, CSS",
    live: "https://mfowlerfinn.github.io/away-timer_webapp/",
    github: "https://github.com/mfowlerfinn/away-timer_webapp"
  },
  {
    title: "Espresso PID thermostat",
    details:
      "This microcontroller reads the temp from a digital sensor strapped to the boiler, calcuates the current error (pid loop), and responds by modifying the duty cycle of the heaters. MUCH better coffee!",
    photo: "./assets/projects/gaggia_pid.jpg",
    tags: "C++, Arduino",
    github: "https://github.com/mfowlerfinn/espresso-pid"
  },
  {
    title: "Temperature Logger",
    details:
      "Long term temperature logger with web graph. Great for monitoring temperature sensitive spaces remotely.",
    photo: "./assets/projects/temp_logger_pi.png",
    tags: "Javascript, HTML, CSS, bash, rPi, python",
    github: "https://github.com/mfowlerfinn/temp_web_logger-pi"
  },
  // {
  //   title: "Etch-a-Sketch",
  //   details: "Draw on a pixel grid with your mouse",
  //   photo: "./assets/projects/etch.png",
  //   tags: "Javascript, HTML, CSS",
  //   github: "https://github.com/mfowlerfinn/etch-a-sketch",
  //   live: "https://mfowlerfinn.github.io/etch-a-sketch/"
  // },
  {
    title: "Voltage Logging Webserver",
    details:
      "This headless multimeter samples voltage and records it to a SD card. The ESP8266 then serves up a webpage with a graph of the data.",
    photo: "./assets/projects/blank.png",
    tags: "C++, Javascript, HTML, CSS, Arduino",
    github: "https://github.com/mfowlerfinn/voltage_web_logger"
  },
  {
    title: "Environmental Sensor",
    details:
      "Developed for a local laboratory, this has a highly accurate temperature and humidity sensor with on-board display. I also designed and printed the case",
    photo: "./assets/projects/blank.png",
    tags: "C++, Arduino",
    github: "https://github.com/mfowlerfinn/environmental-sensor_esp32"
  },
  {
    title: "Incubator PID thermostat",
    details:
      "Developed for a local laboratory, this microcontroller creates a micro-climate with a carefully controlled heater.",
    photo: "./assets/projects/blank.png",
    tags: "C++, Arduino",
    github: "https://github.com/mfowlerfinn/thermostat-keypad-pid"
    //},
    // {
    // 	title: "Websocket IC2 control",
    // 	details:
    // 		"Webpage sliders connected to an ESP8266 through Websockets for nearly instant control of RGB LEDs",
    // 	photo: "./assets/projects/blank.png",
    // 	tags: "C++, Javascript, HTML, CSS, Arduino"
    // },
    // {
    // 	title: "Sunrise Alarm",
    // 	details:
    // 		"The alarm clock I use daily. Syncs with internet time on startup. When activated, the alarm slowly increases the lux and color of 16 leds to simulate a sunrise.",
    // 	photo: "./assets/projects/blank.png",
    // 	tags: "C++, Javascript, HTML, CSS, Arduino"
    // },
    // {
    // 	title: "HTML canvas artboard",
    // 	details: "Simple web app to show the cool capabilities of HTML Canvas.",
    // 	photo: "./assets/projects/blank.png",
    // 	tags: "Javascript, HTML, CSS"
    // },
    // {
    // 	title: "Scale Display",
    // 	details:
    // 		"Universal scale display with tare function; will work with any Wheatstone Bridge. Powered via 9v battery.",
    // 	photo: "./assets/projects/blank.png",
    // 	tags: "C++, Arduino"
  }
];
