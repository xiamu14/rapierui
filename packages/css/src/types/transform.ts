type TransformFunctionName = "matrix" | "translate";

export class TransformFunctionValue {
  private _value: string;
  private _functionName: TransformFunctionName;
  constructor(functionName: TransformFunctionName, value: string) {
    this._value = value;
    this._functionName = functionName;
  }
  /**
   * get value
   */
  public get value() {
    return `${this._functionName}(${this._value})`;
  }
}