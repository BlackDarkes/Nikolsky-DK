export const MapBlock = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden", }} className="mx-auto shadow-(--shadow-block) rounded-xl">
      <a
        href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: 0,
        }}
      >
        Яндекс Карты
      </a>
      <a
        href="https://yandex.ru/maps/geo/selo_nikolskoye/53157338/?ll=60.911903%2C56.259705&utm_medium=mapframe&utm_source=maps&z=15"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Село Никольское — карта, что посмотреть, фото, как добраться, координаты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=60.911903%2C56.259705&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE1NzMzOBKQAdCg0L7RgdGB0LjRjywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQodGL0YHQtdGA0YLRgdC60LjQuSDQvNGD0L3QuNGG0LjQv9Cw0LvRjNC90YvQuSDQvtC60YDRg9CzLCDRgdC10LvQviDQndC40LrQvtC70YzRgdC60L7QtSIKDYemc0IVWQdhQg%2C%2C&z=15"
        width="1000px"
        height="500px"
        frameBorder="1"
        allowFullScreen={true}
        style={{ 
          position: "relative",
          height: "clamp(300px,40vw,500px)"
        }}
        title="yandex-map"
      ></iframe>
    </div>
  );
};
