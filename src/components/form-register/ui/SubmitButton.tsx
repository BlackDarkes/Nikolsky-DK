export const SubmitButton = () => {
  return (
    <button title="Записаться" type="submit" className="mt-[clamp(40px,4vw,60px)] self-center py-[clamp(16px,4vw,24px)] w-[min(100%,400px)] bg-(--button-bg) text-center text-(--primary-color) rounded-xl uppercase transition duration-400 cursor-pointer hover:opacity-80">
      записаться
    </button>
  );
}