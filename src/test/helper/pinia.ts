import { createPinia, setActivePinia } from "pinia";
import { beforeAll, beforeEach } from "vitest";

export function initBeforeEachPinia() {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
}

export function initBeforeAllPinia() {
  beforeAll(() => {
    setActivePinia(createPinia());
  });
}
