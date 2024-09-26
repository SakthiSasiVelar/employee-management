import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getEmployees, postEmployee } from "../QueryFunctions/employeeQueryFunctions";


export const useGetEmployees = () => {
    return useQuery({
        queryFn : getEmployees,
        queryKey: ['Employee']

    })
}


export const useAddEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : postEmployee,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey:['Employee']})
        }
    })
}