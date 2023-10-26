class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="col ">
    <div class="card shadow bg-white" style="width: 18rem">
        <img src="${this.image}" class="card-img-top img-fluid" style="height: 190px; object-fit: cover;" />
        <div class="card-body" style="font-size: 14px; padding:24px;">
            <p class="card-title">${this.manufacture} ${this.model}</p>
            <p class="fw-bold">Rp.400.000/ hari</p>
            <p class="card-text" style="height: 90px">${this.description}</p>
            <div> <i class="bi bi-people-fill me-2"></i>${this.capacity} Orang</div>
            <div class="mt-3 mb-3"> <i class="bi bi-gear me-2"></i>${this.transmission}</div>
            <div> <i class="bi bi-calendar4 me-2"></i>${this.year}</div>
            <a href="#" class="btn btn-primary text-white w-100 mt-4 fw-bold " style="font-size: 14px">Pilih Mobil</a>
        </div>
    </div>
    </div>
    `;
  }
}
