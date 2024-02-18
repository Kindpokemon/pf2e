import { ActorSourcePF2e } from "@actor/data/index.ts";
import { RuleElementSource } from "@module/rules/index.ts";
import * as R from "remeda";
import { MigrationBase } from "../base.ts";

/** Move tracking of roll-option toggles to the rules themselves */
export class Migration741RollOptionToggleToItem extends MigrationBase {
    static override version = 0.741;

    override async updateActor(source: ActorSourcePF2e): Promise<void> {
        if (!R.isPlainObject(source.flags.pf2e?.rollOptions)) return;

        const rules = source.items
            .flatMap((i) => i.system.rules)
            .filter(
                (r: MaybeRollOption): r is ToggeableRollOption =>
                    !!r.toggleable &&
                    r.key === "RollOption" &&
                    typeof r.domain === "string" &&
                    r.domain.length > 0 &&
                    typeof r.option === "string" &&
                    r.option.length > 0,
            );

        const rollOptions = source.flags.pf2e.rollOptions;

        for (const rule of rules) {
            const domain = rollOptions[rule.domain];
            if (domain instanceof Object && rule.option in domain) {
                domain[`-=${rule.option}`] = false;
                rule.value = !!domain[rule.option];
            }
        }
    }
}

interface MaybeRollOption extends RuleElementSource {
    toggleable?: JSONValue;
    domain?: JSONValue;
    option?: JSONValue;
    value?: JSONValue;
}

interface ToggeableRollOption extends RuleElementSource {
    toggleable: boolean;
    domain: string;
    option: string;
    value: JSONValue;
}
