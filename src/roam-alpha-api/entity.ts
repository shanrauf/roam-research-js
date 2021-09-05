/**
 *
 * Entity
 *
 */

/**
 * The database entity ID
 */
export type RoamEntityId = number;

/**
 * See https://docs.datomic.com/cloud/schema/schema-reference.html
 */
export type EntityAttrs = { source: string[]; value: string }[][];
