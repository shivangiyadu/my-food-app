
/*
const resList=[{
    "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "header": {
          "title": "Top restaurant chains in Bangalore",
          "action": {},
          "headerStyling": {
            "padding": {
              "left": 16,
              "top": 28,
              "bottom": 18
            }
          }
        },
        "layout": {
          "rows": 1,
          "columns": 20,
          "horizontalScrollEnabled": true,
          "itemSpacing": 32,
          "widgetPadding": {},
          "containerStyle": {
            "containerPadding": {
              "left": 16,
              "right": 12,
              "bottom": 12
            }
          },
          "scrollBar": {
            "scrollThumbColor": "#E46D47",
            "scrollTrackColor": "#02060C",
            "width": 54,
            "height": 4,
            "scrollStyling": {
              "padding": {
                "top": 6,
                "bottom": 24
              }
            }
          },
          "widgetTheme": {
            "defaultMode": {
              "backgroundColour": "#1B3028",
              "theme": "THEME_TYPE_DARK"
            },
            "darkMode": {
              "backgroundColour": "#1B3028",
              "theme": "THEME_TYPE_DARK"
            }
          }
        },
        "id": "top_brands_for_you",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            "restaurants": [
              {
                "info": {
                  "id": "65797",
                  "name": "Leon's - Burgers & Wings (Leon Grill)",
                  "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "American",
                    "Snacks",
                    "Turkish",
                    "Portuguese",
                    "Continental"
                  ],
                  "avgRating": 4.4,
                  "parentId": "371281",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 04:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "312",
                  "name": "Beijing Bites",
                  "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
                  "locality": "5th A Block",
                  "areaName": "Koramangala",
                  "costForTwo": "₹450 for two",
                  "cuisines": [
                    "Chinese",
                    "Thai",
                    "Pan-Asian"
                  ],
                  "avgRating": 4.4,
                  "parentId": "103",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 01:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹599",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/beijing-bites-5th-a-block-koramangala-bangalore-312",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "10820",
                  "name": "California Burrito",
                  "cloudinaryImageId": "b58sysfvskincfwmgoqd",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Mexican",
                    "American",
                    "Salads",
                    "Continental",
                    "Keto",
                    "Healthy Food"
                  ],
                  "avgRating": 4.6,
                  "parentId": "1252",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 1.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 01:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "18973",
                  "name": "Nandhana Palace",
                  "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹500 for two",
                  "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian"
                  ],
                  "avgRating": 4.2,
                  "parentId": "2120",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 02:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹399",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "289266",
                  "name": "BOX8 - Desi Meals",
                  "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
                  "locality": "6TH BLOCK",
                  "areaName": "Koramangala",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "North Indian",
                    "Biryani",
                    "Thalis",
                    "Home Food"
                  ],
                  "avgRating": 4.4,
                  "parentId": "10655",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 13,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "8-18 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/box8-desi-meals-6th-block-koramangala-bangalore-289266",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "506324",
                  "name": "Louis Burger",
                  "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
                  "locality": "6Th Block, Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹600 for two",
                  "cuisines": [
                    "Burgers",
                    "American",
                    "Fast Food"
                  ],
                  "avgRating": 4.4,
                  "parentId": "22485",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 04:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "10576",
                  "name": "Pizza Hut",
                  "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "avgRating": 4,
                  "parentId": "721",
                  "avgRatingString": "4.0",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 04:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "25620",
                  "name": "KFC",
                  "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                  "locality": "Intermediate Ring Road",
                  "areaName": "Ejipura",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                  ],
                  "avgRating": 4.2,
                  "parentId": "547",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 0.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "50467",
                  "name": "Bakingo",
                  "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
                  "locality": "1st Block",
                  "areaName": "Koramangala",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                  ],
                  "avgRating": 4.3,
                  "parentId": "3818",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 01:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹399",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "293023",
                  "name": "Istah - The Mediterranean Way",
                  "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
                  "locality": "6th Block",
                  "areaName": "Koramangala",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Mediterranean",
                    "Snacks",
                    "Biryani",
                    "Grill",
                    "Kebabs",
                    "Arabian",
                    "Lebanese",
                    "Beverages",
                    "Desserts",
                    "Italian",
                    "Turkish"
                  ],
                  "avgRating": 4.5,
                  "parentId": "3518",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "OnlyOnSwiggy",
                              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹110"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-6th-block-koramangala-bangalore-293023",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "140887",
                  "name": "McDonald's",
                  "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
                  "locality": "Mantri Avenue",
                  "areaName": "Koramangala",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                  ],
                  "avgRating": 4.5,
                  "parentId": "630",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 22:45:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "5934",
                  "name": "Burger King",
                  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Burgers",
                    "American"
                  ],
                  "avgRating": 4.3,
                  "parentId": "166",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 05:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "93741",
                  "name": "Subway",
                  "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                  "locality": "The Nexus Mall",
                  "areaName": "Koramangala",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4,
                  "parentId": "2",
                  "avgRatingString": "4.0",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "108424",
                  "name": "Domino's Pizza",
                  "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
                  "locality": "5TH Block",
                  "areaName": "Koramangala",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                  ],
                  "avgRating": 4.4,
                  "parentId": "2456",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 00:59:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "156119",
                  "name": "The Good Bowl",
                  "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
                  "locality": "Jakkasandra",
                  "areaName": "Hsr Layout 5th Sector",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Biryani",
                    "Pastas",
                    "Punjabi",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.2,
                  "parentId": "7918",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:59:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹110"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/the-good-bowl-jakkasandra-hsr-layout-5th-sector-bangalore-156119",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "41913",
                  "name": "Chinita Real Mexican Food",
                  "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹750 for two",
                  "cuisines": [
                    "Mexican",
                    "Salads",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.5,
                  "parentId": "5064",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "158855",
                  "name": "Candice's Gourmet Sandwiches & Wraps",
                  "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
                  "locality": "5th Block",
                  "areaName": "Koramangala",
                  "costForTwo": "₹600 for two",
                  "cuisines": [
                    "Continental",
                    "American",
                    "Salads",
                    "Desserts",
                    "Beverages",
                    "Healthy Food"
                  ],
                  "avgRating": 4.5,
                  "parentId": "465403",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ],
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "425",
                  "name": "Hotel Empire",
                  "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹450 for two",
                  "cuisines": [
                    "North Indian",
                    "Kebabs",
                    "Biryani"
                  ],
                  "avgRating": 4.3,
                  "parentId": "475",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 03:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹50 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "36464",
                  "name": "Social",
                  "cloudinaryImageId": "bdbomszetaqkuibrfseb",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹500 for two",
                  "cuisines": [
                    "Chinese",
                    "Fast Food",
                    "Biryani",
                    "Pizzas",
                    "Salads",
                    "Kebabs",
                    "Juices",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "parentId": "2146",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-26 23:30:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/social-koramangala-bangalore-36464",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "42060",
                  "name": "Sharief Bhai",
                  "cloudinaryImageId": "9ca4ac15ca5cdee1e71efe15909d465f",
                  "locality": "Koramangala",
                  "areaName": "Koramangala",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Arabian",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "parentId": "5734",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-01-27 03:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-"
                }
              }
            ]
          }
        }
      }
}]
export default resList;
*/
const resList= [
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '121603',
        name: 'Kannur Food Point',
        uuid: '51983905-e698-4e31-b0d7-e376eca56320',
        city: '1',
        area: 'Tavarekere',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
        cuisines: ['Kerala', 'Chinese'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 3,
        slugs: {
          restaurant: 'kannur-food-point-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
        locality: 'SG Palya',
        parentId: 20974,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '121603',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '229',
        name: 'Meghana Foods',
        uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
        cuisines: [
          'Biryani',
          'Andhra',
          'South Indian',
          'North Indian',
          'Chinese',
          'Seafood',
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: '₹500 FOR TWO',
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        slaString: '16 MINS',
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: 'meghana-foods-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
        locality: '5th Block',
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '229',
          deliveryTime: 16,
          minDeliveryTime: 16,
          maxDeliveryTime: 16,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '428',
        name: 'Biryani Pot',
        uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
        cuisines: ['North Indian', 'Biryani'],
        tags: [],
        costForTwo: 50000,
        costForTwoString: '₹500 FOR TWO',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: '19 MINS',
        lastMileTravel: 1.899999976158142,
        slugs: {
          restaurant: 'biryani-pot-madiwala-junction-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
        locality: 'Maruti Nagar',
        parentId: 21798,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '20% off',
          shortDescriptionList: [
            {
              meta: '20% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '20% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.8 kms',
        hasSurge: false,
        sla: {
          restaurantId: '428',
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 1.899999976158142,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '223',
        name: 'Truffles',
        uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
        cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: '30 MINS',
        lastMileTravel: 1.600000023841858,
        slugs: {
          restaurant: 'truffles-ice-spice-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
        locality: '5th Block',
        parentId: 218065,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.6 kms',
        hasSurge: false,
        sla: {
          restaurantId: '223',
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 1.600000023841858,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '425',
        name: 'Hotel Empire',
        uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
        cuisines: ['North Indian', 'Kebabs', 'Biryani'],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: '23 MINS',
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: 'hotel-empire-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
        locality: 'Koramangala',
        parentId: 475,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '10% off',
          shortDescriptionList: [
            {
              meta: '10% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '10% off up to ₹40 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '10% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '10% off up to ₹40 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.2 kms',
        hasSurge: false,
        sla: {
          restaurantId: '425',
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.1',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '201224',
        name: 'Asha tiffins',
        uuid: 'e32381cf-6468-4c10-9bad-47fa08e898a8',
        city: '1',
        area: 'HSR Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'n15vckntsiboiod3gpco',
        cuisines: ['Indian', 'South Indian', 'Beverages'],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: '26 MINS',
        lastMileTravel: 4,
        slugs: {
          restaurant: 'asha-tiffins-hsr-hsr-2',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India',
        locality: '7th Sector',
        parentId: 236243,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '30% off',
          shortDescriptionList: [
            {
              meta: '30% off | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '30% off upto ₹80 | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '30% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '30% off upto ₹80 | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6196512~p=7~eid=00000187-2c1c-96f0-0062-eea400b00725',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4 kms',
        hasSurge: false,
        sla: {
          restaurantId: '201224',
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '59593',
        name: 'Al Daaz',
        uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
        city: '1',
        area: 'Hsr Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
        cuisines: [
          'American',
          'Arabian',
          'Chinese',
          'Desserts',
          'Mughlai',
          'North Indian',
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: '₹400 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'al-daaz-hsr-hsr',
          city: 'bangalore',
        },
        cityState: '1',
        address: '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
        locality: 'HSR',
        parentId: 21640,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '59593',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.3',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '56589',
        name: 'Roti-Wala',
        uuid: '257a0889-b243-4252-b84a-6c9f1760d58f',
        city: '1',
        area: 'BTM Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'ptetuqkrhmpd8tiqiztg',
        cuisines: [
          'North Indian',
          'Home Food',
          'Thalis',
          'Chinese',
          'Punjabi',
          'South Indian',
          'Ice Cream',
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        slaString: '37 MINS',
        lastMileTravel: 4,
        slugs: {
          restaurant: 'roti-wala-lavelle-road-central-bangalore',
          city: 'bangalore',
        },
        cityState: '1',
        address: '#239, 7TH Cross, Btm Stage 2. NS Palya, 560076',
        locality: '2nd Stage',
        parentId: 415860,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹100 | Use code GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹100 | Use code GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4 kms',
        hasSurge: false,
        sla: {
          restaurantId: '56589',
          deliveryTime: 37,
          minDeliveryTime: 37,
          maxDeliveryTime: 37,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '560153',
        name: 'Rice Bowl',
        uuid: 'b5652b7d-5df8-4be5-8fe9-27648b668e79',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '1000+ ratings',
        cloudinaryImageId: 'z2ahvclpmdv6lekyth39',
        cuisines: ['North Indian', 'South Indian'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: '22 MINS',
        lastMileTravel: 2.5,
        slugs: {
          restaurant: 'rice-bowl-koramangala-koramangala-2',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034',
        locality: 'Jakkasandra',
        parentId: 169302,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: 'FLAT125 off',
          shortDescriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '₹125 OFF',
          shortDescriptionList: [
            {
              meta: 'Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6081264~p=10~eid=00000187-2c1c-96f0-0062-eea500b00a3d',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '2.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '560153',
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.1',
        totalRatings: 1000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '337335',
        name: 'Kannur food kitchen',
        uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
        city: '1',
        area: 'BTM Layout',
        totalRatingsString: '5000+ ratings',
        cloudinaryImageId: 'a27weqanhnszqiuzsoik',
        cuisines: ['Kerala', 'Biryani', 'Beverages'],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 2.5,
        slugs: {
          restaurant: 'kannur-food-kitchen-btm-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
        locality: '1st  Stage',
        parentId: 114756,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '2.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '337335',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.8',
        totalRatings: 5000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '601',
        name: 'Litti Twist',
        uuid: 'e7dcc8d7-fea9-4312-8c4e-7a6516a026db',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'zyahkuhlgnxp3prkvttv',
        cuisines: ['North Indian'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: '28 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'litti-twist-2nd-stage-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
        locality: '2nd Stage',
        parentId: 3455,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6276197~p=13~eid=00000187-2c1c-96f0-0062-eea600b00d24',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '601',
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '256957',
        name: 'Shanmukha Restaurant',
        uuid: 'c1972fbf-2e19-42d6-ac49-54f412f78d86',
        city: '1',
        area: 'Jayanagar',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'c5howge9hbdor7uqf949',
        cuisines: [
          'Biryani',
          'Hyderabadi',
          'Andhra',
          'North Indian',
          'South Indian',
          'Chinese',
          'Tandoor',
          'Seafood',
          'Beverages',
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 5,
        slugs: {
          restaurant: 'shanmukha-restaurant-jayanagar-jayanagar',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India',
        locality: '9th Block',
        parentId: 9954,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '256957',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.1',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '642459',
        name: 'Malnad Donne Biryani MDB',
        uuid: '4ae022a0-9296-40ac-8ea9-3e764200e6a5',
        city: '1',
        area: 'Jayanagar',
        totalRatingsString: '50+ ratings',
        cloudinaryImageId: 'tjw67zgzfehxgfo1vio2',
        cuisines: ['Biryani', 'South Indian', 'Kebabs'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 5,
        slugs: {
          restaurant: 'malnad-donne-biryani-mdb-jayanagar-jayanagar',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '1384, 32nd E Cross , near Axis bank, opp sanjay gandhi university. 4th T Block , Jayanagar, Bengaluru, Karnataka 560041',
        locality: 'T Block',
        parentId: 130946,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 1,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '642459',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'IT_IS_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.9',
        totalRatings: 50,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '27643',
        name: 'Ultimate Parathas',
        uuid: '925340c8-7945-4cdf-894b-01a90f5445a2',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'm0bjo1ds8l6o4civx6ek',
        cuisines: ['Bihari', 'North Indian', 'Desserts'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: '29 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'litti-twist-koramangala-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
        locality: '2nd Stage',
        parentId: 21591,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6276390~p=16~eid=00000187-2c1c-96f0-0062-eea700b01075',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '27643',
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '42294',
        name: 'Udupi Palace',
        uuid: '7e5fb1de-707b-4851-a0f7-a70df335efe2',
        city: '1',
        area: 'HSR Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'dbfp4mqtidbjh9sectlk',
        cuisines: [
          'Beverages',
          'Biryani',
          'Chinese',
          'Desserts',
          'North Indian',
          'South Indian',
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: '₹150 FOR TWO',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: '30 MINS',
        lastMileTravel: 5.599999904632568,
        slugs: {
          restaurant: 'udupi-palace-00-hsr',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'No 1188 HNR tower 24th main second SECTOR HSR LAYOUT BANGALORE 560102',
        locality: '2nd Sector',
        parentId: 6971,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '20% off',
          shortDescriptionList: [
            {
              meta: '20% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '20% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '42294',
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 5.599999904632568,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
  ];
  export default resList;