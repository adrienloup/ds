/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  ComponentPropsWithoutRef,
  ComponentType,
  FC,
  FunctionComponent,
  ReactNode,
} from "react";
import { AuthProvider } from "../contexts/Auth";
import { SettingsProvider } from "../contexts/Settings";
import { FontSizeProvider } from "../contexts/FontSize";
import { AlertProvider } from "../contexts/Alert";
import { TaskProvider } from "../contexts/Task";
import { NotificationsProvider } from "../contexts/Notifications";
import { SlotType } from "../models/Slot";

type Providers = [ComponentType<SlotType>, ComponentPropsWithoutRef<any>?][];

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: any) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: ReactNode }> =
  combineProviders([
    [AuthProvider],
    [SettingsProvider],
    [FontSizeProvider],
    [AlertProvider],
    [TaskProvider],
    [NotificationsProvider],
  ]);
