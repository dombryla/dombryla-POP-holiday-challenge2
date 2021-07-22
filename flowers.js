class Flowers {
  constructor(shopName, flowerShops) {
    this.shopName = shopName;
    this.flowerShops = flowerShops;
    this.flower;
  }

  exhibition(flower) {
    this.flowerShops.map((item) => (item.flower = flower));
  }
}

const flowerShop = [
  new Flowers("Kwiaciarnia Stokrotka", null),
  new Flowers("Kwiatowe Kreacje", null),
  new Flowers("Kwiaty u Basi", null),
  new Flowers("Kwiaty na każdą okazje", null),
];
const flowers = new Flowers("Flower", flowerShop);

flowers.exhibition("żonkil");
console.log(flowers);
