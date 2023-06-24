import { render, fireEvent } from "@testing-library/react";
import { FormInput, inputLabel, inputType } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  useStateContext: jest.fn().mockReturnValue({
    state: "cliente",
    outHome: true,
    handleChange: jest.fn(),
  }),
}));

jest.mock("@hooks/useInput", () => ({
  useInput: jest.fn().mockReturnValue({
    vehicle: {},
    value: {},
    client: {},
    conductor: {},
    displacement: {},
    clientForm: {},
    conductorForm: {},
    displacementForm: {},
    vehicleForm: {},
    updatedConductor: jest.fn(),
    updateClient: jest.fn(),
    updatedDisplacement: jest.fn(),
    updatedVehicle: jest.fn(),
  }),
}));

describe("<FormInput />", () => {
  it("should render without errors", () => {
    const { container } = render(<FormInput />);
    expect(container).toBeInTheDocument();
  });

  it("should return 'date' for objectKey 'vencimento'", () => {
    const objectKey = "vencimento";
    const expectedInputType = "date";

    const result = inputType(objectKey);

    expect(result).toBe(expectedInputType);
  });

  it("should return 'number' for specific objectKeys", () => {
    const objectKeys = [
      "número",
      "habilitação",
      "quilometragem",
      "rodagem",
      "fabricado",
      "documento",
      "quilometro_final",
    ];
    const expectedInputType = "number";

    objectKeys.forEach((objectKey) => {
      const result = inputType(objectKey);
      expect(result).toBe(expectedInputType);
    });
  });

  it("should return 'text' for other objectKeys", () => {
    const objectKeys = ["nome", "email", "telefone", "endereco"];
    const expectedInputType = "text";

    objectKeys.forEach((objectKey) => {
      const result = inputType(objectKey);
      expect(result).toBe(expectedInputType);
    });
  });

  it("should apply correctly empty label", () => {
    const objectKey = "vencimento";
    const expectNullLabel = "";

    const result = inputLabel(objectKey);
    expect(result).toBe(expectNullLabel);
  });

  it("should apply correctly label formatting", () => {
    const objectKey = "quilometro_final";
    const expectNullLabel = "QUILOMETRAGEM FINAL";

    const result = inputLabel(objectKey);
    expect(result).toBe(expectNullLabel);
  });
});
