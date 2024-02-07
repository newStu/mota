import { vi } from "vitest";

export async function filterTimeout(func: () => void) {
  vi.useFakeTimers();
  func();
  await vi.runAllTimersAsync();
}
