export function Normalize() {
  const capitalizeName = (str: string) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  function formatCep(value: string): string {
    const formattedValue = value.replace(/\D/g, "");
    const cepRegex = /^(\d{5})(\d{3})$/;

    if (cepRegex.test(formattedValue)) {
      return formattedValue.replace(cepRegex, "$1-$2");
    }

    return formattedValue;
  }

  return {
    capitalizeName,
    formatCep
  }
}
