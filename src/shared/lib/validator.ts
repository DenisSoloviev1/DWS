import * as zod from 'zod';
import { errorMap } from 'zod-validation-error';

zod.setErrorMap(errorMap);

export { zod };
