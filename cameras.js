const cameras = [
  // Original 7 camera streams
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

  // Newly added camera streams
  {
    id: "camera-8",
    name: "US-36 @ CO-157 (W View)",
    latitude: 39.985155,
    longitude: -105.232497,
    thumbnail: "https://ie.trafficland.com/v2.0/10744/full?system=weatherbug-web&pubtoken=07a3ca255962aba7f182ad0ccd6c8f7777830b3b661570181bbb42ec9ac7f454&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.985155,-105.232497&camId=10744"
  },
  {
    id: "camera-9",
    name: "CO 93 MP 013.65 NB at Eldorado Springs Dr/CO 170",
    latitude: 39.953704,
    longitude: -105.231680,
    thumbnail: "https://ie.trafficland.com/v2.0/435344/full?system=weatherbug-web&pubtoken=0a1e9e5a64682102d6cde32fe72b5b507a42d9db7168710eee0659a9c439fd52&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.953704,-105.231680&camId=435344"
  },
  {
    id: "camera-10",
    name: "CO 93 MP 010.40 SB: 1.7 miles S of CO 128 in Golden",
    latitude: 39.909969,
    longitude: -105.240801,
    thumbnail: "https://ie.trafficland.com/v2.0/435301/full?system=weatherbug-web&pubtoken=384b9118cd86f389ce8df6d0566de6b58771eef2c770b8b316818315e0a21c55&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.909969,-105.240801&camId=435301"
  },
  {
    id: "camera-11",
    name: "US-36 w/o 88th St (E View)",
    latitude: 39.94688,
    longitude: -105.149291,
    thumbnail: "https://ie.trafficland.com/v2.0/421040/full?system=weatherbug-web&pubtoken=87282cbed8fbc5803ab63f0e0ba7892981429d8de0097d82362181c7a5a8de9b&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.94688,-105.149291&camId=421040"
  },
  {
    id: "camera-12",
    name: "CO 93 MP 008.80 SB at Westgate Rd in Golden",
    latitude: 39.885171,
    longitude: -105.241175,
    thumbnail: "https://ie.trafficland.com/v2.0/435327/full?system=weatherbug-web&pubtoken=33255a7c5c60f1e49fe14927eeb38325e8418609b402bc197ecf3cc39beb30bf&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.885171,-105.241175&camId=435327"
  },
  {
    id: "camera-13",
    name: "CO-128 MP 007.20 WB at Interlocken Pkwy",
    latitude: 39.916798,
    longitude: -105.11132,
    thumbnail: "https://ie.trafficland.com/v2.0/435401/full?system=weatherbug-web&pubtoken=e9867435437f0917b2dcc6bc9f2e4dbb2a25a871cd23ea698b739409ab32db10&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.916798,-105.11132&camId=435401"
  },
  {
    id: "camera-14",
    name: "CO 93 MP 006.85 NB: 0.8 miles S of Coal Creek Canyon Rd/CO 72",
    latitude: 39.858465,
    longitude: -105.234066,
    thumbnail: "https://ie.trafficland.com/v2.0/435389/full?system=weatherbug-web&pubtoken=fbb241d5c905816c0cc3934fef487e4fee89da497031a026679eec5630c807d3&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.858465,-105.234066&camId=435389"
  },
  {
    id: "camera-15",
    name: "CO 93 MP 010.40 SB: 1.7 miles S of CO 128 in Golden",
    latitude: 39.909969,
    longitude: -105.240801,
    thumbnail: "https://ie.trafficland.com/v2.0/435301/full?system=weatherbug-web&pubtoken=384b9118cd86f389ce8df6d0566de6b58771eef2c770b8b316818315e0a21c55&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.909969,-105.240801&camId=435301"
  },
  {
    id: "camera-16",
    name: "I-25 MP 229.10 SB at E Baseline Rd/CO 7",
    latitude: 40.000301,
    longitude: -104.981468,
    thumbnail: "https://ie.trafficland.com/v2.0/435333/full?system=weatherbug-web&pubtoken=d730f689882732fccc2a5bf3bd039f266e73d91a7fc9893c87a80fc9329ac392&refreshRate=600000",
    stream: "traffic-cam/?latlng=40.000301,-104.981468&camId=435333"
  },
  {
    id: "camera-17",
    name: "CO 93 MP 002.50 NB : 0.6 miles S of W 56th Ave in Golden",
    latitude: 39.791873,
    longitude: -105.230278,
    thumbnail: "https://ie.trafficland.com/v2.0/435334/full?system=weatherbug-web&pubtoken=049aa1d6d5d718c170236ea780e833b3b41ab688bd4ce5ee8bc70f18eb54eeca&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.791873,-105.230278&camId=435334"
  },
  {
    id: "camera-18",
    name: "I-70 MP 265.70 EB at Ward Rd",
    latitude: 39.77964288,
    longitude: -105.1382644,
    thumbnail: "https://ie.trafficland.com/v2.0/435232/full?system=weatherbug-web&pubtoken=3eb31168e15c23b10a6d8dd99f362dbc0c0fd2054244c0a27c9451697db5434&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.77964288,-105.1382644&camId=435232"
  },
  {
    id: "camera-19",
    name: "US-6 MP 271.60 WB at CO 58/CO 93 in Golden",
    latitude: 39.867686,
    longitude: -104.986632,
    thumbnail: "https://ie.trafficland.com/v2.0/435264/full?system=weatherbug-web&pubtoken=83a404d636a6d5194e64903a543961add8025a05516e903069a95cf4ae1adb4f&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.867686,-104.986632&camId=10516"
  },
  {
    id: "camera-20",
    name: "I-70 MP 244.35 EB at US 6/US 40",
    latitude: 39.740001,
    longitude: -105.227571,
    thumbnail: "https://ie.trafficland.com/v2.0/435410/full?system=weatherbug-web&pubtoken=054967bf548aef059513d419622f13240ddaca85fc02e23fe99c123aa38ca361&refreshRate=600000",
    stream: "traffic-cam/?latlng=39.740001,-105.227571&camId=435410"
  },
  {
      id: "camera-21",
      name: "US-36 e/o Lowell Blvd (E View)",
      latitude: 39.838279,
      longitude: -105.031287,
      thumbnail: "https://ie.trafficland.com/v2.0/6823/full?system=weatherbug-web&pubtoken=f84f4ac7370741e6c60806bc8917cd69a56974de227a785e56eb95ceff5492e7&refreshRate=600000",
      stream: "traffic-cam/?latlng=39.838279,-105.031287&camId=6823"
  },
  {
      id: "camera-22",
      name: "I-25 s/o Thornton Pkwy (N View)",
      latitude: 39.862144,
      longitude: -104.987889,
      thumbnail: "https://ie.trafficland.com/v2.0/10514/full?system=weatherbug-web&pubtoken=2d40024e4a7875d3a6825e1a79820b08f1a76dca23ab3681b58406dd334382af&refreshRate=600000",
      stream: "traffic-cam/?latlng=39.862144,-104.987889&camId=10514"
  },
  {
      id: "camera-23",
      name: "I-70 MP 265.70 EB at Ward Rd",
      latitude: 39.790728,
      longitude: -104.993914,
      thumbnail: "https://ie.trafficland.com/v2.0/435226/full?system=weatherbug-web&pubtoken=40a0a7ebfec1abfd351c7509ad38fced37806b2f76fc04a60297ec31ad9f1c67&refreshRate=600000",
      stream: "traffic-cam/?latlng=39.790728,-104.993914&camId=435226"
  },
  {
      id: "camera-24",
      name: "I-70 MP 244.35 EB at US 6/US 40",
      latitude: 39.736674,
      longitude: -105.31732,
      thumbnail: "https://ie.trafficland.com/v2.0/420742/full?system=weatherbug-web&pubtoken=73a1ce9be1bab9304a4b6395b51a1a24295444e510ad6181d1b869df5134b601&refreshRate=600000",
      stream: "traffic-cam/?latlng=39.736674,-105.31732&camId=420742"
  },
  {
      id: "camera-25",
      name: "US-6 MP 262.35 EB : 2.2 miles W of Tunnel 3",
      latitude: 39.735252,
      longitude: -105.36647,
      thumbnail: "https://ie.trafficland.com/v2.0/435246/full?system=weatherbug-web&pubtoken=a93dc6e6589a6ee53d2b8bce79237eb99763299bce8dc3ac3ef0875da6b8fe46&refreshRate=600000",
      stream: "traffic-cam/?latlng=39.735252,-105.36647&camId=435246"
  },
];
