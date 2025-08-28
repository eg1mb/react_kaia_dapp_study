export const prepare = (situration: boolean) => {
  if (situration)
    return {
      code: "00",
      message: "success",
      result: {
        orderProcessId: new Date().toISOString(),
      },
    };
  else
    return {
      code: "01",
      message: "fail",
    };
};

export const process = (situration: boolean, orderProcessId?: string) => {
  if (orderProcessId) {
    if (situration)
      return {
        code: "00",
        message: "success",
        result: {
          orderProcessId: orderProcessId,
        },
      };
    else
      return {
        code: "01",
        message: "fail",
      };
  } else {
    if (situration)
      return {
        code: "00",
        message: "success",
      };
    else
      return {
        code: "01",
        message: "fail",
      };
  }
};

export const apply = (situration: boolean) => {
  if (situration)
    return {
      code: "00",
      message: "success",
      result: {
        orderProcessId: new Date().toISOString(),
      },
    };
  else
    return {
      code: "01",
      message: "fail",
    };
};

export const result = (situration: boolean) => {
  if (situration)
    return {
      code: "00",
      message: "success",
      result: {
        orderProcessId: new Date().toISOString(),
      },
    };
  else
    return {
      code: "01",
      message: "fail",
    };
};
