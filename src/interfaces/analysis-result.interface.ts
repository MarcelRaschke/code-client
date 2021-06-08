import { Log } from 'sarif';

interface Coverage {
  files: number;
  isSupported: boolean;
  lang: string;
}

export interface AnalysisResult {
  sarif: Log;
  timing: {
    fetchingCode: number;
    analysis: number;
    queue: number;
  };
  coverage: Coverage[];
  status: 'COMPLETE';
  // progress: 1;
}
