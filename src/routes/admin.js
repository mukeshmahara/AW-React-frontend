import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard"


export default(
  <>
  <Route index exact element={<Dashboard />} />
  </>
)