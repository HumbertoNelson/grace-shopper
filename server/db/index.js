const conn = require("./conn");
const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const LineItem = require("./LineItem");
const Review = require("./Review");

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Review.belongsTo(Product);
Product.hasMany(Review);
Review.belongsTo(User);
User.hasMany(Review);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [matt, gary, humberto, antonia, bedTwin, bedQueen, chairGaming, chairOffice, sofaSectional, sofaLoveseat, deskStanding, deskRegular] = await Promise.all([
    User.create({ username: 'matt', password: '123', firstName: 'Matt', lastName: 'Giambrone', bio: 'This is the bio for Matt.' }),
    User.create({ username: 'gary', password: '123', firstName: 'Gary', lastName: 'White', bio: 'This is the bio for Gary.'  }),
    User.create({ username: 'humberto', password: '123', firstName: 'Humberto', lastName: 'Nelson', bio: 'This is the bio for Humberto.'  }),
    User.create({ username: 'antonia', password: '123', firstName: 'Antonia', lastName: 'Benidettino', bio: 'This is the bio for Antonia.'  }),
    Product.create({ name: 'Twin Bed', price: 150, weight: 120, size: '76x39x11', color: 'Gray', imageURL: 'https://www.ikea.com/us/en/images/products/grimsbu-bed-frame-gray__0749251_pe747239_s5.jpg?f=xl' }),
    Product.create({ name: 'Queen Bed', price: 300, weight: 250, size: '88x63x47', color: 'Pink', imageURL: 'https://www.ikea.com/us/en/images/products/idanaes-upholstered-bed-frame-gunnared-pale-pink__0953727_pe802887_s5.jpg?f=xl' }),
    Product.create({ name: 'Gaming Chair', price: 130, weight: 60, size: '21x16x50', color: 'Red', imageURL: 'https://staticprod.site.flexispot.com/cdn-cgi/image/dpr=1,format=webp,w=824,h=706/https://staticprod.site.flexispot.com/flexispot/catalog/product/g/c/gc02-br-1.jpg' }),
    Product.create({ name: 'Office Chair', price: 70, weight: 40, size: '21x22x36', color: 'White', imageURL: 'https://secure.img1-fg.wfcdn.com/im/73801152/resize-h445%5Ecompr-r85/1334/133424184/Ergonomic+Task+Chair.jpg' }),
    Product.create({ name: 'Sectional', price: 2000, weight: 550, size: '92x61x33', color: 'Gray', imageURL: 'https://cdn.shopify.com/s/files/1/0667/0732/5202/products/1_0465741b-958f-4963-abbd-ff7415960cb9.jpg?v=1669323185&width=1400' }),
    Product.create({ name: 'Loveseat', price: 1000, weight: 400, size: '72x35x33', color: 'Blue', imageURL: 'https://res.cloudinary.com/castlery/image/private/w_1200,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624968828/crusader/variants/T50440967-TL4001-BLK/Adams-2-Seater-Sofa-Indigo-Blue-Black-Leg-Lifestyle-Crop.jpg' }),
    Product.create({ name: 'Standing Desk', price: 250, weight: 100, size: '48x30x28', color: 'Black', imageURL: 'https://m.media-amazon.com/images/I/51TmcFDZLNL.__AC_SX300_SY300_QL70_FMwebp_.jpg' }),
    Product.create({ name: 'Regular Desk', price: 200, weight: 80, size: '60x30x29', color: 'White', imageURL: 'https://images.globalindustrial.com/images/pdp/65865_17.jpg?t=1670920411799' }),
  ]);

  await gary.getCart();
  await gary.addToCart({ ...chairOffice.dataValues, quantity: 3});
  await gary.addToCart({ ...bedQueen.dataValues, quantity: 1});
  await gary.createOrder();

  await gary.getCart();
  await gary.addToCart({ ...sofaSectional.dataValues, quantity: 1});
  await gary.addToCart({ ...deskStanding.dataValues, quantity: 1});
  await gary.createOrder();

  await gary.getCart();
  await gary.addToCart({ ...chairGaming.dataValues, quantity: 2});
  await gary.addToCart({ ...bedTwin.dataValues, quantity: 2});

  await antonia.getCart();
  await antonia.addToCart({ ...chairOffice.dataValues, quantity: 3});
  await antonia.addToCart({ ...bedQueen.dataValues, quantity: 1});
  
  return {
    users: {
      matt,
      gary,
      humberto,
      antonia,
    },
    products: {
      bedTwin,
      bedQueen,
      chairGaming,
      chairOffice,
      sofaSectional,
      sofaLoveseat,
      deskStanding,
      deskRegular,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
};
