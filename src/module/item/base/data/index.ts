import type { AbilitySource } from "@item/ability/data.ts";
import type { AfflictionSource } from "@item/affliction/data.ts";
import type { AncestrySource } from "@item/ancestry/data.ts";
import type { ArmorSource } from "@item/armor/data.ts";
import type { BackgroundSource } from "@item/background/data.ts";
import type { BookSource } from "@item/book/data.ts";
import type { CampaignFeatureSource } from "@item/campaign-feature/data.ts";
import type { ClassSource } from "@item/class/data.ts";
import type { ConditionSource } from "@item/condition/data.ts";
import type { ConsumableSource } from "@item/consumable/data.ts";
import type { ContainerSource } from "@item/container/data.ts";
import type { DeitySource } from "@item/deity/data.ts";
import type { EffectSource } from "@item/effect/data.ts";
import type { EquipmentSource } from "@item/equipment/data.ts";
import type { FeatSource } from "@item/feat/data.ts";
import type { HeritageSource } from "@item/heritage/data.ts";
import type { KitSource } from "@item/kit/data.ts";
import type { LoreSource } from "@item/lore.ts";
import type { MeleeSource } from "@item/melee/data.ts";
import type { PhysicalItemType } from "@item/physical/types.ts";
import type { ShieldSource } from "@item/shield/data.ts";
import type { SpellSource } from "@item/spell/data.ts";
import type { SpellcastingEntrySource } from "@item/spellcasting-entry/data.ts";
import type { TreasureSource } from "@item/treasure/data.ts";
import type { WeaponSource } from "@item/weapon/data.ts";
import type { PROFICIENCY_NUMBERS, PROFICIENCY_RANKS } from "@module/data.ts";
import { ItemDescriptionData } from "./system.ts";

type ProficiencyRank = (typeof PROFICIENCY_RANKS)[number];
type ProficiencyValues = (typeof PROFICIENCY_NUMBERS)[number];
type ProficiencyValuesMinusZero = Exclude<ProficiencyValues, 0>;

type NonPhysicalItemType =
    | "action"
    | "affliction"
    | "ancestry"
    | "background"
    | "campaignFeature"
    | "class"
    | "condition"
    | "deity"
    | "effect"
    | "feat"
    | "heritage"
    | "kit"
    | "lore"
    | "melee"
    | "spell"
    | "spellcastingEntry";

type ItemType = NonPhysicalItemType | PhysicalItemType;

type PhysicalItemSource =
    | ArmorSource
    | BookSource
    | ConsumableSource
    | ContainerSource
    | EquipmentSource
    | ShieldSource
    | TreasureSource
    | WeaponSource;

type ItemSourcePF2e =
    | PhysicalItemSource
    | AbilitySource
    | AfflictionSource
    | AncestrySource
    | BackgroundSource
    | CampaignFeatureSource
    | ClassSource
    | ConditionSource
    | DeitySource
    | EffectSource
    | FeatSource
    | HeritageSource
    | KitSource
    | LoreSource
    | MeleeSource
    | SpellSource
    | SpellcastingEntrySource;

type MagicItemSource = Exclude<PhysicalItemSource, ConsumableSource | TreasureSource>;

interface RawItemChatData {
    [key: string]: unknown;
    description: ItemDescriptionData;
    traits?: TraitChatData[];
    properties?: string[];
}

interface TraitChatData {
    value: string;
    label: string;
    description?: string;
    mystified?: boolean;
    excluded?: boolean;
}

export type {
    ActionCost,
    ActionType,
    Frequency,
    FrequencyInterval,
    FrequencySource,
    ItemFlagsPF2e,
    ItemSystemData,
} from "./system.ts";

export type {
    AbilitySource,
    AncestrySource,
    ArmorSource,
    BackgroundSource,
    BookSource,
    ClassSource,
    ConditionSource,
    ConsumableSource,
    ContainerSource,
    DeitySource,
    EffectSource,
    EquipmentSource,
    FeatSource,
    ItemSourcePF2e,
    ItemType,
    KitSource,
    LoreSource,
    MagicItemSource,
    MeleeSource,
    NonPhysicalItemType,
    PhysicalItemSource,
    ProficiencyRank,
    ProficiencyValues,
    ProficiencyValuesMinusZero,
    RawItemChatData,
    ShieldSource,
    SpellSource,
    SpellcastingEntrySource,
    TraitChatData,
    TreasureSource,
    WeaponSource,
};
