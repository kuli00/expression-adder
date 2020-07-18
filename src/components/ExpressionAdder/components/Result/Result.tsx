import React, { FC } from 'react';
import { ResultProps } from './Result.types';

export const Result: FC<ResultProps> = ({ result }) => (
  <>
    {result.map((r, key) => (
      <>
        {r.coefficient !== 0 && (
          <>
            {key === 0 ? (
              <>{r.coefficient}</>
            ) : (
              <>
                {r.coefficient > 0 && '+'}
                {r.coefficient}
              </>
            )}
            {r.exponent !== 0 && 'x'}
            {(r.exponent > 1 || r.exponent < 0) && <sup>{r.exponent}</sup>}
          </>
        )}
      </>
    ))}
  </>
);