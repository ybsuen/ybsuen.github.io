// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [
      {
      type: "overview",
      date: "1963-2017",
      text: {
        headline: "Chinese University of Hong Kong",
        text: "<p>Founded in 1963, The Chinese University of Hong Kong (CUHK) is a forward-looking comprehensive research university with a global vision and a mission to combine tradition with modernity, and to bring together China and the West. CUHK teachers and students hail from all around the world. CUHK graduates are connected worldwide through an extensive alumni network.</p>"
      },
      media: {
        url: "http://www.cuhk.edu.hk/english/images/header_about.png",
        credit: "CUHK",
        caption: ""
      }
    }, 
     {
      date: "2005",
      text: {
        headline: "CENTER FOR ENTREPRENEURSHIP",
        text: "<p> Found in 2005, the Center for Entrepreneurship (CfE) of the Chinese University of Hong Kong (CUHK) is an interdisciplinary association. It has united scholars in the area of research, education and community service to inspire the spirit of entrepreneurship and nurture entrepreneurship thinking.</p>"
      },
      location: {
        name: "Cheng Yu Tung Building, Chek Cheung Street",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 22.4122,
        lon: 114.2105,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://www.bschool.cuhk.edu.hk/wp-content/uploads/ContactUs_Hero01.png",
        type: 		"image",
        credit: "CUHK",
        caption: "Cheng Yu Tung Building, School of Busness."
      }
    }, 
     {
      date: "1965",
      text: {
        headline: "SCHOOL OF JOURNALISM AND COMMUNICATION",
        text: "<p>Established in 1965, the School of Journalism and Communication has the longest history of communication education and research in Hong Kong. The first Master of Philosophy programme was launched in 1977 by the late Professor Wilbur Schramm, one of the founding fathers of communication studies.</p> "
      },
      location: {
        name: "CUHK New Asia College",
        ICON:"https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 22.4210,
        lon: 114.2090,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pg.com.cuhk.edu.hk/wp-content/uploads/2014/09/banner_mediaedu-en-1165x657.jpg",
        type: "image",
        credit: "CUHK",
        caption: "CUHK School of Journalism and Communication."
      }
    }
    ] // end of slides
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}