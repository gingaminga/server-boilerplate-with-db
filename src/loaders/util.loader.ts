import relationDBOption from "@config/orm.config";
import RelationDBClient from "@my-rdb/client";

export const rdbUtil = new RelationDBClient(relationDBOption);
