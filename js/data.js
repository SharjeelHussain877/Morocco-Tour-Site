const packagesArr = [
  {
    id: 1234,
    image: "./img/package-1.jpg",
    location: "Marrakech",
    day: 8,
    night: 7,
    package_name: "Marrakech back to Marrakech",
    price: 1750,
    img: [
      "./img/package-1-1.jpg",
      "./img/package-1-2.jpg",
      "./img/package-1-3.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1235,
    image: "./img/package-2.jpg",
    location: "Marrakech",
    day: 6,
    night: 5,
    package_name: "Imperial Cities History and Culture 5 Stars Hotels Tour from Marrakech",
    price: 1500,
    img: [
      "./img/package-2-1.jpg",
      "./img/package-2-2.jpg",
      "./img/package-2-3.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1236,
    image: "./img/package-3.jpg",
    location: "Marrakech",
    day: 3,
    night: 2,
    package_name: "Marrakech to Merzouga ending in Fes",
    price: 750,
    img: [
      "./img/package-3-1.jpg",
      "./img/package-3-2.jpg",
      "./img/package-3-3.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1237,
    image: "./img/package-4.jpg",
    location: "Marrakech",
    day: 3,
    night: 2,
    package_name: "From Fes to Marrakech",
    price: 750,
    img: [
      "./img/package-4-1.jpg",
      "./img/package-4-2.jpg",
      "./img/package-4-3.jpeg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1238,
    image: "./img/package-5.jpg",
    location: "Marrakech",
    day: 2,
    night: 1,
    package_name: "From Marrakeck to Zagoura bach to Marrakech",
    price: 250,
    img: [
      "./img/package-5-1.jpg",
      "./img/package-5-2.jpeg",
      "./img/package-5-3.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1239,
    image: "./img/package-6.jpg",
    location: "Fes",
    day: 10,
    night: 9,
    package_name: "Private tour Package start from Fes",
    price: 2250,
    img: [
      "./img/package-7.jpg",
      "./img/package-9.jpeg",
      "./img/package-6-1.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1240,
    image: "./img/package-7.jpg",
    location: "Fes",
    day: 6,
    night: 5,
    package_name: "Northern Morocco Private Tour start from Fes",
    price: 750,
    img: [
      "./img/package-7.jpg",
      "./img/package-9.jpeg",
      "./img/package-7-1.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1241,
    image: "./img/package-8.jpg",
    location: "Fes",
    day: 2,
    night: 1,
    package_name: "From Fes back to Fes",
    price: 250,
    img: [
      "./img/package-7.jpg",
      "./img/package-8-1.jpg",
      "./img/package-9.jpeg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1242,
    image: "./img/package-9.jpeg",
    location: "Fes",
    dayTrip: true,
    package_name: "From Fes to Chefchaoen",
    price: 200,
    img: [
      "./img/package-9.jpeg",
      "./img/package-9-1.jpg",
      "./img/package-7.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1243,
    image: "./img/package-10.jpg",
    location: "Fes",
    dayTrip: true,
    package_name: "From Fes to Iframe and Middle Atlas",
    price: 200,
    img: [
      "./img/package-10.jpg",
      "./img/package-9.jpeg",
      "./img/package-6-1.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1244,
    image: "./img/package-11.jpg",
    location: "Fes",
    dayTrip: true,
    package_name: "From Fes to Meknes and Volubilis back to Fes",
    package_title: "Marrakech back to Marrakech",
    price: 200,
    img: [
      "./img/package-11.jpg",
      "./img/package-11-1.jpg",
      "./img/package-8.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1245,
    image: "./img/package-12.jpg",
    location: "Casablanca",
    day: 15,
    night: 14,
    package_name: "15 Day tour Package start from Casablanca",
    package_title: "Marrakech back to Marrakech",
    price: 3250,
    img: [
      "./img/package-12.jpg",
      "./img/package-12-1.avif",
      "./img/package-12-2.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1246,
    image: "./img/package-13.jpg",
    location: "Casablanca",
    day: 10,
    night: 9,
    package_name: "Moroccan Private Tour starting from the Airport of Casablanca finishing in Marrakech",
    price: 2500,
    img: [
      "./img/package-13.jpg",
      "./img/package-13-1.jpg",
      "./img/package-13-2.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1247,
    image: "./img/package-14.jpg",
    location: "Casablanca",
    day: 8,
    night: 7,
    package_name: "Package Tours Start Casablanca Airport Back to Casablanca Airport",
    price: 2500,
    img: [
      "./img/package-14.jpg",
      "./img/package-12-1.avif",
      "./img/package-11-1.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1248,
    image: "./img/package-15.jpg",
    location: "Casablanca",
    day: 8,
    night: 7,
    package_name: "Imperial Cities Tour of Morocco",
    price: 1750,
    img: [
      "./img/package-15.jpg",
      "./img/package-11.jpg",
      "./img/package-12-2.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1249,
    image: "./img/package-16.jpg",
    location: "Tanger",
    day: 11,
    night: 10,
    package_name: "Private tour Package start from Casablanca",
    price: 2500,
    img: [
      "./img/package-16.jpg",
      "./img/package-11.jpg",
      "./img/package-12-2.jpg",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
  {
    id: 1250,
    image: "./img/package-17.jpg",
    location: "Tanger",
    day: 9,
    night: 8,
    package_name: "Private tour package start from Tanger",
    price: 2250,
    img: [
      "./img/package-17.jpg",
      "./img/package-15-1.jpg",
      "./img/package-17-1.webp",
    ],
    facilities: [
      {
        type: true,
        name: "Private Transportation with AC",
      },
      {
        type: true,
        name: "Driver & guide",
      },
      {
        type: true,
        name: "8 Luxury night accommodation",
      },
      {
        type: false,
        name: "8 Breakfast",
      },
      {
        type: true,
        name: "4 dinners",
      },
      {
        type: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        type: false,
        name: "Drinks",
      },
      {
        type: false,
        name: "Lunchs",
      },
    ],
    faq: [
      {
        ques: "Day 1: Marrakech to Agafay Desert",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
      },
      {
        ques: "Day 2: Casablanca, Rabat",
        ans: `We will pick you up at 8:30 in the morning in a private 4x4 vehicle to depart for Ouarzazate through the High Atlas mountains. Along the way, we will pass through Tizi Ntichka port, which is the highest point in our country at 2,260m. You can enjoy beautiful landscapes from the viewpoints and take pictures of the Berber villages. Next, we'll take a smaller road leading to Telouet Kasbah, where you'll have some free time to enjoy a typical meal in town.`,
        _ans: `In the afternoon, we will continue through the Ounila Valley, where you can see small Berber villages and families living in adobe houses nestled in the mountains. Our destination is the Ksar (fortified village) of Ait Ben Haddou, a UNESCO World Heritage Site, famous for being a backdrop for many films. After visiting the Kasbah, we'll head to Ouarzazate, also known as "The Gateway to the Desert." Dinner will be at the hotel where you'll spend the night.`,
      },
      {
        ques: " Day 3: Rabat to Fez",
        ans: `After breakfast, we'll depart for the Draa Valley, home to one of the longest rivers in Morocco. Along the way, we'll make stops for pictures and admire the spectacular kasbahs and Berber villages. You'll have some free time for lunch in Nkob or Alnif. After a two-hour drive, we'll reach the magnificent Merzouga dunes, known as the "Desert of powdery sand dunes." Here, we'll switch from motorized transportation to camels and venture into the heart of the desert. Upon reaching the camp, you'll stay in camel hair tents, similar to those used by nomad families. Enjoy dinner and a night under the beautiful starry sky.`,
      },
      {
        ques: " Day 4: Fez",
        ans: `This day is dedicated to the desert. Begin with a "Date with the Sunrise," a must-see spectacle in the middle of the desert. After sunrise, we'll return to Merzouga on camels for a hearty breakfast. We'll then follow the Erg Chebbi dunes, home to the Big Dune of Morocco, standing over 250 meters tall. Driving along the former "Paris-Dakar" route, we'll reach the mountains bordering Agelia. Stops include Tissardmin Oasis with fossil quarries, nomad settlements, and a viewpoint to admire the entire Erg Chebbi. We'll visit Kamilia Village, originally from Mali, for tea and a Gnawa music concert.`,
        _ans: `Next, transfer to your accommodation with free time to explore the town or the nearby dunes and witness the sunset. Dinner and overnight stay at a hotel.`,
      },
      {
        ques: "Day 5: Fez to Chefchaouen",
        ans: `After breakfast, we leave the desert and head to Rissani to visit the market (market days: Tuesday, Thursday, and Saturday). We continue to Erfoud, where you can explore fossilized marble workshops. Then, we proceed to Touroug and Tinjdad palm groves, followed by a visit to the Todra Gorges, known for their cliff-sided canyon. Lunch is recommended in this stunning location. A short walk through the gorges allows you to appreciate the landscape's beauty.`,
        _ans: `In the afternoon, we continue to the Dadès Valley, also known as the figs valley, passing through Boumalne Dadés and the "monkey legs." Dinner and overnight stay at the Dadès Gorges.`,
      },
      {
        ques: "Day 6: Chefchaouen to Tangier",
        ans: `After breakfast, enjoy a panoramic view of the Dadès valley from a strategic lookout in the mountains. Then, we'll travel through a road dotted with various kasbahs of tourist interest. After experiencing the "One thousand kasbahs road," the Roses Valley, and the Skoura palm grove, we'll arrive in Ouarzazate to visit the Kasbah of Taourirt, the former residence of the Glaoui or Marrakech pasha. Optionally, you can visit the cinema studios and the cinema museum. Enjoy lunch in town, and in the afternoon, begin your journey back to Marrakech through the Tizi Ntichka mountain pass. Take advantage of stops for photos and witness the transition from the lunar landscape to a colorful one. Arrival in Marrakech around 6 pm, followed by an overnight stay at a hotel.`,
      },
    ],
  },
];

function data() {
  return packagesArr;
}

export default data;
