import { ClassifyQuestionAgentItemType } from '../module/type';
import { SearchDataResponseItemType } from '../dataset/type';
import {
  ChatFileTypeEnum,
  ChatItemValueTypeEnum,
  ChatRoleEnum,
  ChatSourceEnum,
  ChatStatusEnum
} from './constants';
import { FlowNodeTypeEnum } from '../module/node/constant';
import { ModuleOutputKeyEnum } from '../module/constants';
import { DispatchNodeResponseKeyEnum } from '../module/runtime/constants';
import { AppSchema } from '../app/type';
import type { AppSchema as AppType } from '@fastgpt/global/core/app/type.d';
import { DatasetSearchModeEnum } from '../dataset/constants';
import { ChatBoxInputType } from '../../../../projects/app/src/components/ChatBox/type';
import { DispatchNodeResponseType } from '../module/runtime/type.d';

export type ChatSchema = {
  _id: string;
  chatId: string;
  userId: string;
  teamId: string;
  tmbId: string;
  appId: string;
  updateTime: Date;
  title: string;
  customTitle: string;
  top: boolean;
  variables: Record<string, any>;
  source: `${ChatSourceEnum}`;
  shareId?: string;
  outLinkUid?: string;
  content: ChatItemType[];
  metadata?: Record<string, any>;
};

export type ChatWithAppSchema = Omit<ChatSchema, 'appId'> & {
  appId: AppSchema;
};

export type UserChatItemValueItemType = {
  type: ChatItemValueTypeEnum.text | ChatItemValueTypeEnum.file;
  text?: {
    content: string;
  };
  file?: {
    type: `${ChatFileTypeEnum}`;
    name?: string;
    url: string;
  };
};
export type UserChatItemType = {
  obj: ChatRoleEnum.Human;
  value: UserChatItemValueItemType[];
};
export type SystemChatItemValueItemType = {
  type: ChatItemValueTypeEnum.text;
  text?: {
    content: string;
  };
};
export type SystemChatItemType = {
  obj: ChatRoleEnum.System;
  value: SystemChatItemValueItemType[];
};
export type AIChatItemValueItemType = {
  type: ChatItemValueTypeEnum.text | ChatItemValueTypeEnum.tool;
  text?: {
    content: string;
  };
  tools?: ToolModuleResponseItemType[];
};
export type AIChatItemType = {
  obj: ChatRoleEnum.AI;
  value: AIChatItemValueItemType[];
  userGoodFeedback?: string;
  userBadFeedback?: string;
  customFeedbacks?: string[];
  adminFeedback?: AdminFbkType;
  [DispatchNodeResponseKeyEnum.nodeResponse]?: ChatHistoryItemResType[];
};
export type ChatItemValueItemType =
  | UserChatItemValueItemType
  | SystemChatItemValueItemType
  | AIChatItemValueItemType;

export type ChatItemSchema = (UserChatItemType | SystemChatItemType | AIChatItemType) & {
  dataId: string;
  chatId: string;
  userId: string;
  teamId: string;
  tmbId: string;
  appId: string;
  time: Date;
};

export type AdminFbkType = {
  dataId: string;
  datasetId: string;
  collectionId: string;
  q: string;
  a?: string;
};

/* --------- chat item ---------- */
export type ChatItemType = (UserChatItemType | SystemChatItemType | AIChatItemType) & {
  dataId?: string;
};

// 交叉类型允许我们将多个类型合并成一个类型，新的类型将具有所有组成类型的所有属性
export type ChatSiteItemType = (UserChatItemType | SystemChatItemType | AIChatItemType) & {
  dataId: string;
  status: `${ChatStatusEnum}`;
  moduleName?: string;
  ttsBuffer?: Uint8Array;
} & ChatBoxInputType;

/* --------- team chat --------- */
export type ChatAppListSchema = {
  apps: AppType[];
  teamInfo: teamInfoSchema;
  uid?: string;
};

/* ---------- history ------------- */
export type HistoryItemType = {
  chatId: string;
  updateTime: Date;
  customTitle?: string;
  title: string;
};
export type ChatHistoryItemType = HistoryItemType & {
  appId: string;
  top: boolean;
};

/* ------- response data ------------ */
export type ChatHistoryItemResType = DispatchNodeResponseType & {
  moduleType: `${FlowNodeTypeEnum}`;
  moduleName: string;
};

/* One tool run response  */
export type ToolRunResponseItemType = any;
/* tool module response */
export type ToolModuleResponseItemType = {
  id: string;
  toolName: string; // tool name
  toolAvatar: string;
  params: string; // tool params
  response: string;
  functionName: string;
};

/* dispatch run time */
export type RuntimeUserPromptType = {
  files?: UserChatItemValueItemType['file'][];
  text: string;
};
