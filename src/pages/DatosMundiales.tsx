"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import logo from "@/assets/img/covid_19.svg";

interface CovidData {
  cases: number;
  deaths: number;
  recovered: number;
}

export default function CovidDataDashboard() {
  const [globalData, setGlobalData] = useState<CovidData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchGlobalData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<CovidData>(
        "https://deft-crepe-fe73b5.netlify.app/.netlify/functions/server/api/coronavirus/total"
      );
      setGlobalData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGlobalData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <img
          src={logo}
          alt="COVID-19 Logo"
          className="mx-auto mb-6 h-24 w-24"
        />
        <h1 className="text-4xl font-bold mb-4">
          COVID-19 Panel de control global
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          Manténgase informado con las últimas estadísticas de COVID-19 de todo
          el mundo.
        </p>
        <p className="text-sm text-muted-foreground italic">
          (Actualizamos nuestra información diariamente)
        </p>
      </header>

      <div className="mb-8 text-center">
        <Button onClick={fetchGlobalData} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            "Actualizar Datos"
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Casos confirmados"
          value={globalData?.cases}
          loading={loading}
          description="Total confirmed COVID-19 cases worldwide"
          color="blue"
        />
        <StatCard
          title="Fallecidos"
          value={globalData?.deaths}
          loading={loading}
          description="Total COVID-19 related deaths worldwide"
          color="red"
        />
        <StatCard
          title="Recuperados"
          value={globalData?.recovered}
          loading={loading}
          description="Total recovered COVID-19 cases worldwide"
          color="green"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number | undefined;
  loading: boolean;
  description: string;
  color: "blue" | "red" | "green";
}

function StatCard({
  title,
  value,
  loading,
  description,
  color,
}: StatCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    red: "bg-red-50 border-red-200 text-red-700",
    green: "bg-green-50 border-green-200 text-green-700",
  };

  return (
    <Card className={`${colorClasses[color]} border`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
        ) : (
          <div className="text-4xl font-bold mb-2">
            {value?.toLocaleString()}
          </div>
        )}
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
