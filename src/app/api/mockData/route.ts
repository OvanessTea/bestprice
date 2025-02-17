import { statistics_tabs_data } from "@/__mocks__/statistics_tabs";
import { stats_contacts } from "@/__mocks__/stats_contacts";
import { stats_favs } from "@/__mocks__/stats_favs";
import { stats_orders } from "@/__mocks__/stats_orders";  
import { stats_views } from "@/__mocks__/stats_views";
import { incomes } from "@/__mocks__/incomes";
import { ads } from "@/__mocks__/ads";
import { service_level } from "@/__mocks__/service_level";
import { activity } from "@/__mocks__/activity";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handler = searchParams.get('handler');

  switch (handler) {
    case 'statistics_tabs':
      return Response.json(statistics_tabs_data);
    case 'stats_views':
      return Response.json(stats_views);
    case 'stats_contacts':
      return Response.json(stats_contacts);
    case 'stats_favs':
      return Response.json(stats_favs);
    case 'stats_orders':
      return Response.json(stats_orders);
    case 'incomes':
      return Response.json(incomes);
    case 'ads':
      return Response.json(ads);
    case 'service_level':
      return Response.json(service_level);
    case 'activity':
      return Response.json(activity);
    default:
      return Response.json({ message: 'Not found' }, { status: 404 });
  }
}