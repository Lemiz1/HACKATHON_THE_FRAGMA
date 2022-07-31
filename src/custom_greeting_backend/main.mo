import List "mo:base/List";
import customer "customer";
actor{
public type customer = customer.customer;

public type List<T> = ?(T, List<T>);
var customer_list : List<customer> = null;

public func add_customer(_cuztomer : customer){
    customer_list := List.push<customer>(_cuztomer, customer_list);
}

}