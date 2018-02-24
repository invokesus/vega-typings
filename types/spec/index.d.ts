import { AutoSize } from './autosize';
import { Background } from './background';
import { Config } from './config';
import { EncodeEntry, Encode } from './encode';
import { Padding } from './padding';
import { Scope } from './scope';

export interface Spec extends Scope, Encode<EncodeEntry> {
  $schema?: string;
  width?: number;
  height?: number;
  config?: any;
  description?: string;
  padding?: Padding;
  autosize?: AutoSize;
  background?: Background;
}

export * from './autosize';
export * from './axis';
export * from './background';
export * from './bind';
export * from './config';
export * from './data';
export * from './encode';
export * from './expr';
export * from './layout';
export * from './legend';
export * from './mark';
export * from './marktype';
export * from './on-events';
export * from './on-trigger';
export * from './padding';
export * from './projection';
export * from './scale';
export * from './scope';
export * from './selector';
export * from './signal';
export * from './stream';
export * from './title';
export * from './transform';
export * from './util';
