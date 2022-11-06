type ImpactValue = "minor" | "moderate" | "serious" | "critical" | null;

interface CheckResult {
  id: string;
  impact: string;
  message: string;
  data: any;
}

interface NodeResult {
  html: string;
  impact?: ImpactValue;
  target: string[];
  xpath?: string[];
  ancestry?: string[];
  any: CheckResult[];
  all: CheckResult[];
  none: CheckResult[];
  failureSummary?: string;
  element?: HTMLElement;
}

export interface Result {
  description: string;
  help: string;
  helpUrl: string;
  id: string;
  impact?: ImpactValue;
  nodes: NodeResult[];
}
