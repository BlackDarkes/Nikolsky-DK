export const AboutText = () => {
  return (
    <div className="shadow-(--shadow-block)" style={{ backgroundColor: "var(--about-us-bg)", borderRadius: "clamp(12px,4vw,24px)", padding: "clamp(30px,5vw,100px)" }}>
      <p className="mx-auto text-center font-bold" style={{ fontSize: "clamp(20px,4vw,32px)", width: "min(100%, 1165px)" }}>{"Официальный сайт Никольского сельского Дома Культуры. Структурное подразделение МБУК \"Щелкунский дом культуры\". Здесь вы сможете найти всю интересующую вас информацию, а также быть в курсе всех новостей и мероприятий"}</p>
    </div>
  );
}