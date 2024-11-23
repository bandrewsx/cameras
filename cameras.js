const cameras = [
  {
    "id": "camera-1",
    "name": "28th St and Colorado Ave",
    "latitude": 40.007581,
    "longitude": -105.265942,
    "thumbnail": "https://webappsprod.bouldercolorado.gov/webcams/28th-colorado.jpg",
    "stream": "https://videostream.bouldercolorado.gov/live/smil:28th_and_colorado.smil/playlist.m3u8"
  },
  {
    "id": "camera-2",
    "name": "Broadway and Canyon Blvd",
    "latitude": 40.015830,
    "longitude": -105.279270,
    "thumbnail": "https://webappsprod.bouldercolorado.gov/webcams/broadway-canyon.jpg",
    "stream": "https://videostream.bouldercolorado.gov/live/smil:broadway_and_canyon.smil/playlist.m3u8"
  },
  {
    "id": "camera-3",
    "name": "Foothills Pkwy and Arapahoe Ave",
    "latitude": 40.015296,
    "longitude": -105.240722,
    "thumbnail": "https://webappsprod.bouldercolorado.gov/webcams/foothills-arapahoe.jpg",
    "stream": "https://videostream.bouldercolorado.gov/live/smil:foothills_and_arapahoe.smil/playlist.m3u8"
  },
  {
    "id": "camera-4",
    "name": "28th and Iris Ave",
    "latitude": 40.038986,
    "longitude": -105.259793,
    "thumbnail": "https://webappsprod.bouldercolorado.gov/webcams/28th-iris.jpg",
    "stream": "https://videostream.bouldercolorado.gov/live/smil:28th_and_iris.smil/playlist.m3u8"
  },
  {
    "id": "camera-5",
    "name": "US 36 MP 039.20 EB at CO 157/Foothills Pkwy",
    "latitude": 40.013890,
    "longitude": -105.247330,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/036E03920CAM1RP1/chunklist_w744211294.m3u8"
  },
  {
    "id": "camera-6",
    "name": "US 36 MP 043.15 WB at McCaslin Blvd and US 36 WB On-ramp",
    "latitude": 39.951400,
    "longitude": -105.164420,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/036W04315CAM1RP1/chunklist_w1570063898.m3u8"
  },
  {
    "id": "camera-7",
    "name": "US 36 MP 054.65 WB : 0.3 miles W of Federal Blvd",
    "latitude": 39.845370,
    "longitude": -105.024460,
    "thumbnail": "",
    "stream": "https://publicstreamer3.cotrip.org/rtplive/036W05465CAM1MED/chunklist_w671228802.m3u8"
  },
  {
    "id": "camera-8",
    "name": "I-70 MP 278.8 at Denver",
    "latitude": 39.7392,
    "longitude": -104.9903,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70/stream.m3u8"
  },
  {
    "id": "camera-9",
    "name": "Federal Blvd and 84th Ave",
    "latitude": 39.8683,
    "longitude": -105.0245,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/federal/stream.m3u8"
  },
  {
    "id": "camera-10",
    "name": "I-25 and Dry Creek",
    "latitude": 39.5776,
    "longitude": -104.9065,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-drycreek/stream.m3u8"
  },
  {
    "id": "camera-11",
    "name": "Denver Int'l Airport Entrance",
    "latitude": 39.8617,
    "longitude": -104.6735,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/airport/stream.m3u8"
  },
  {
    "id": "camera-12",
    "name": "I-70 MP 209.2 at Beaver Brook",
    "latitude": 39.7456,
    "longitude": -105.5632,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-beaverbrook/stream.m3u8"
  },
  {
    "id": "camera-13",
    "name": "US 40 at Berthoud Falls",
    "latitude": 40.2974,
    "longitude": -105.7415,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us40-berthoud/stream.m3u8"
  },
  {
    "id": "camera-14",
    "name": "CO 93 and US 6",
    "latitude": 39.7439,
    "longitude": -105.2268,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/co93-us6/stream.m3u8"
  },
  {
    "id": "camera-15",
    "name": "I-25 and Castle Rock",
    "latitude": 39.3720,
    "longitude": -104.8509,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-castle/stream.m3u8"
  },
  {
    "id": "camera-16",
    "name": "I-70 MP 245.2 at Genesee",
    "latitude": 39.6531,
    "longitude": -105.2912,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-genesee/stream.m3u8"
  },
  {
    "id": "camera-17",
    "name": "I-25 at US 34",
    "latitude": 40.3764,
    "longitude": -104.7224,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-us34/stream.m3u8"
  },
  {
    "id": "camera-18",
    "name": "I-70 MP 226.5 at Morrison",
    "latitude": 39.6538,
    "longitude": -105.2437,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-morrison/stream.m3u8"
  },
  {
    "id": "camera-19",
    "name": "US 285 at Littleton Blvd",
    "latitude": 39.6054,
    "longitude": -105.0492,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us285-littleton/stream.m3u8"
  },
  {
    "id": "camera-20",
    "name": "I-70 MP 202.5 at Georgetown",
    "latitude": 39.7103,
    "longitude": -105.7805,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-georgetown/stream.m3u8"
  },
  {
    "id": "camera-21",
    "name": "I-25 at Santa Fe Dr",
    "latitude": 39.6736,
    "longitude": -104.9744,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-santa-fe/stream.m3u8"
  },
  {
    "id": "camera-22",
    "name": "I-76 MP 0.1 at Brighton Blvd",
    "latitude": 39.7530,
    "longitude": -104.9901,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i76-brighton/stream.m3u8"
  },
  {
    "id": "camera-23",
    "name": "I-270 MP 3.6 at Vasquez Blvd",
    "latitude": 39.7868,
    "longitude": -104.8771,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i270-vasquez/stream.m3u8"
  },
  {
    "id": "camera-24",
    "name": "I-70 MP 121.8 near Vail Pass",
    "latitude": 39.6007,
    "longitude": -106.3685,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-vail/stream.m3u8"
  },
  {
    "id": "camera-25",
    "name": "CO 470 at Santa Fe Dr",
    "latitude": 39.6212,
    "longitude": -105.0310,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/co470-santa-fe/stream.m3u8"
  },
  {
    "id": "camera-26",
    "name": "I-25 MP 100.5 at Fort Collins",
    "latitude": 40.5853,
    "longitude": -105.0845,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-fortcollins/stream.m3u8"
  },
  {
    "id": "camera-27",
    "name": "US 287 at Larimer County Rd 30",
    "latitude": 40.2041,
    "longitude": -105.1852,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us287-larimer/stream.m3u8"
  },
  {
    "id": "camera-28",
    "name": "C-470 at Quebec St",
    "latitude": 39.6055,
    "longitude": -104.8987,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/c470-quebec/stream.m3u8"
  },
  {
    "id": "camera-29",
    "name": "I-25 at Exit 201",
    "latitude": 39.6341,
    "longitude": -104.9999,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-exit201/stream.m3u8"
  },
  {
    "id": "camera-30",
    "name": "US 6 at Clear Creek",
    "latitude": 39.7573,
    "longitude": -105.2902,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us6-clearcreek/stream.m3u8"
  },
  {
    "id": "camera-31",
    "name": "I-25 at Exit 207 towards Park Meadows",
    "latitude": 39.6020,
    "longitude": -104.8935,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-parkmeadows/stream.m3u8"
  },
  {
    "id": "camera-32",
    "name": "US 85 at Trinidad",
    "latitude": 37.1192,
    "longitude": -104.5016,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us85-trinidad/stream.m3u8"
  },
  {
    "id": "camera-33",
    "name": "I-70 MP 275.9 at Idaho Springs",
    "latitude": 39.7397,
    "longitude": -105.5144,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-idahosprings/stream.m3u8"
  },
  {
    "id": "camera-34",
    "name": "I-76 at MP 10.5 near Fort Morgan",
    "latitude": 40.2522,
    "longitude": -103.8016,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i76-fortmorgan/stream.m3u8"
  },
  {
    "id": "camera-35",
    "name": "I-70 MP 212.2 at Mount Vernon",
    "latitude": 39.7361,
    "longitude": -105.4167,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-mountvernon/stream.m3u8"
  },
  {
    "id": "camera-36",
    "name": "I-25 MP 121.5 at Longmont",
    "latitude": 40.2033,
    "longitude": -105.0685,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-longmont/stream.m3u8"
  },
  {
    "id": "camera-37",
    "name": "I-70 MP 193.9 at Silverthorne",
    "latitude": 39.6545,
    "longitude": -106.0590,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-silverthorne/stream.m3u8"
  },
  {
    "id": "camera-38",
    "name": "US 287 at Loveland",
    "latitude": 40.3964,
    "longitude": -105.1015,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us287-loveland/stream.m3u8"
  },
  {
    "id": "camera-39",
    "name": "I-25 at Berthoud",
    "latitude": 40.2973,
    "longitude": -105.2340,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-berthoud/stream.m3u8"
  },
  {
    "id": "camera-40",
    "name": "US 34 at Estes Park",
    "latitude": 40.3783,
    "longitude": -105.5200,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us34-estes/stream.m3u8"
  },
  {
    "id": "camera-41",
    "name": "US 285 at Conifer",
    "latitude": 39.5703,
    "longitude": -105.2650,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us285-conifer/stream.m3u8"
  },
  {
    "id": "camera-42",
    "name": "I-270 MP 4.5 at Pecos St",
    "latitude": 39.7866,
    "longitude": -104.8954,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i270-pecos/stream.m3u8"
  },
  {
    "id": "camera-43",
    "name": "US 50 at Cañon City",
    "latitude": 38.4402,
    "longitude": -105.2292,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us50-canon/stream.m3u8"
  },
  {
    "id": "camera-44",
    "name": "I-70 MP 244.0 at Evergreen",
    "latitude": 39.6505,
    "longitude": -105.4002,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-evergreen/stream.m3u8"
  },
  {
    "id": "camera-45",
    "name": "I-25 at Exit 190 in Pueblo",
    "latitude": 38.2805,
    "longitude": -104.6093,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-pueblo/stream.m3u8"
  },
  {
    "id": "camera-46",
    "name": "US 385 at Burlington",
    "latitude": 40.1833,
    "longitude": -102.2637,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us385-burlington/stream.m3u8"
  },
  {
    "id": "camera-47",
    "name": "I-25 MP 40.0 at Castle Rock",
    "latitude": 39.3663,
    "longitude": -104.8936,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i25-castlerock/stream.m3u8"
  },
  {
    "id": "camera-48",
    "name": "I-70 at MP 204 near Denver",
    "latitude": 39.7525,
    "longitude": -105.2267,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-denver/stream.m3u8"
  },
  {
    "id": "camera-49",
    "name": "US 141 at Dove Creek",
    "latitude": 37.7449,
    "longitude": -108.8934,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/us141-dovecreek/stream.m3u8"
  },
  {
    "id": "camera-50",
    "name": "I-70 MP 225.6 at Lookout Mountain",
    "latitude": 39.7369,
    "longitude": -105.2734,
    "thumbnail": "",
    "stream": "https://publicstreamer.cotrip.org/rtplive/i70-lookout/stream.m3u8"
  }
];
