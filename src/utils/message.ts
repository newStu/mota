import { ElMessage } from "element-plus";

function message(
  message: string,
  type: "success" | "error" | "warning" | "info",
  duration = 500
) {
  ElMessage({
    type: type,
    message: message,
    duration,
  });
}

export function successMessage(text: string, duration?: number) {
  message(text, "success", duration);
}

export function errorMessage(text: string, duration?: number) {
  message(text, "error", duration);
}

export function infoMessage(text: string, duration?: number) {
  message(text, "info", duration);
}

export function warningMessage(text: string, duration?: number) {
  message(text, "warning", duration);
}
