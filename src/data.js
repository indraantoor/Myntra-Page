const items = [
  {
    id: 1,
    brandName: "HERE&NOW",
    itemInfo: "Checked Straight Shirts",
    sellingPrice: 699,
    originalPrice: 1999,
    discount: 65,
    gender: "men",
    thumbnailUrl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/3ac26958-82fc-47e0-ae38-ef2e191d84971637645503435-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-1.jpg",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/3ac26958-82fc-47e0-ae38-ef2e191d84971637645503435-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/6e81480b-8f92-4be6-9108-f5db344d28c11637645503425-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/7a2646ea-13eb-4b9d-a96d-a46fa88a48591637645503413-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/d52df60b-12d7-46aa-8d0f-d7e5cd1de4ba1637645503402-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/6b212fe2-bd5f-400b-9f4f-0f061b98be261637645503392-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-5.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10863048/2021/11/23/a82ca8ba-2d2c-4076-9433-83ebee017a6d1637645503383-Roadster-Men-Navy-Blue-Solid-Casual-Shirt-4701637645502688-6.jpg",
    ],
  },
  {
    id: 2,
    brandName: "HIGHLANDER",
    itemInfo: "Men Slim Fit Shirt",
    sellingPrice: 449,
    originalPrice: 1249,
    discount: 64,
    gender: "men",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/04874025-1eca-4f03-85af-e9247c539c521618891640521-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/214f8378-d767-4b6f-acb7-6cd29e3ea00f1618891640474-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/90a7ad56-53fa-4ec2-85f5-50b9f7792f801618891640453-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/98387503-495c-4ae5-b510-d2af582a80351618891640432-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/0a56cc6c-15ec-451f-aa10-ccf9a4c027641618891640409-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-5.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/a763f7ae-43c4-4026-9e78-09d1b441010e1618891640389-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-6.jpg",
    ],
    thumbnailUrl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9951805/2021/4/20/04874025-1eca-4f03-85af-e9247c539c521618891640521-Roadster-Men-Maroon--Olive-Green-Checked-Casual-Shirt-801618-1.jpg",
  },
  {
    id: 3,
    brandName: "her by invictus",
    itemInfo: "Women Casusal Shirt",
    sellingPrice: 299,
    originalPrice: 1499,
    discount: 60,
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/bd54b771-8b3f-4a01-84c9-68efe76fd4dd1582876765649-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/60c5cfe2-0e49-42b5-ae92-473b8dcd3f871582876765608-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/4c4923b8-99cd-45ad-ac50-18172a9eb5d71582876765569-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/6c210b4e-4794-41fb-8da5-e8a9939301c01582876765520-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/206f5b23-1d66-4b69-9f90-c38fe3c2e7c21582876765471-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-5.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/0da9170b-dbea-41a7-bab8-9607228dfe5c1582876765427-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-6.jpg",
    ],
    thumbnailUrl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549510/2020/2/28/bd54b771-8b3f-4a01-84c9-68efe76fd4dd1582876765649-SASSAFRAS-Women-Black-Regular-Fit-Self-Design-Casual-Shirt-3-1.jpg",
    gender: "women",
  },
  {
    id: 4,
    brandName: "Roadster",
    itemInfo: "Semi Sheer Casual Shirt",
    sellingPrice: 494,
    originalPrice: 1099,
    discount: 55,
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/a4c56a5b-14bf-45a3-83a1-722e441d6f9f1637214550886SHAYEWomenGreenOpaqueCasualShirt1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/134cad06-931f-40c3-b416-1fc5651e07221637214550811SHAYEWomenGreenOpaqueCasualShirt2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/f1525d80-f282-4a1a-a043-9b2f9829b6b21637214550725SHAYEWomenGreenOpaqueCasualShirt3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/196d3cd8-5fdb-4775-9cbd-58475f811ad61637214550565SHAYEWomenGreenOpaqueCasualShirt4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/10579d64-0b48-4abb-9c98-a78bfa8ac0ee1637214550895SHAYEWomenGreenOpaqueCasualShirt5.jpg",
    ],
    thumbnailUrl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16154710/2021/11/18/a4c56a5b-14bf-45a3-83a1-722e441d6f9f1637214550886SHAYEWomenGreenOpaqueCasualShirt1.jpg",
    gender: "women",
  },
];

module.exports = { items };
