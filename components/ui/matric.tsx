import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface MetricProps {
  title: string;
  value: string | number;
  description?: string;
}

export function Metrics(): JSX.Element {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{item.value}</p>
            {item.description && (
              <p className="text-xs text-muted-foreground">{item.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
