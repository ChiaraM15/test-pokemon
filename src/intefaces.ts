export type Ability = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export type Form = {
  name: string;
  url: string;
};

export type GameIndice = {
  game_index: number;
  version: { name: string; url: string };
};

export type Move = {
  move: { name: string; url: string };
  version_group_details: Array<VersionGroupDetail>;
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: { name: string; url: string };
  order: number | string;
  version_group: { name: string; url: string };
};

export type PastAbility = {
  abilities: number | string;
  is_hiddden: boolean;
  slot: number;
  generation: { name: string; url: string };
};

export type Sprites = {
  back_default: string;
  back_female: number | string;
  back_shiny: string;
  back_shiny_female: number | string;
  front_default: string;
  front_female: number | string;
  front_shiny: string;
  front_shiny_female: number | string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export type Type = {
  slot: number;
  type: { name: string; url: string };
};

export interface Pokemon {
  abilities: Array<Ability>;
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: { name: string; url: string };
  game_indices: Array<GameIndice>;
  height: number;
  held_items?: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_abilities: string;
  past_types?: [];
  species: { name: string; url: string };
  stats: Array<Stat>;
  types: Array<Type>;
  weight: number;
}
