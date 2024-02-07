import type { RoleProperty } from "@/typings/constants";

export function createRole(obj: {
  [key in keyof RoleProperty]?: any;
}): RoleProperty {
  return Object.assign(
    {
      Name: "xxx",
      HP: 0,
      DEF: 0,
      ATK: 0,
      MP: 0,
      XP: 1,
      Gold: 1,
      width: 1,
      height: 1,
    },
    obj
  );
}
