import React from "react";
import Screen from "./Screen";
import More from "./More";
import Dashboard from "./Dashboard";

export const DashboardScreen = () => <Dashboard />;
export const MeasuresScreen = () => <Screen name="Measures" />;
export const TreatmentScreen = () => <Screen name="Treatment" />;
export const ProfileScreen = () => <More />;
