-- (part of) Ada code for Figure 9.3 (Example 9.21)

package gp_list.queue is
    type queue is new list with private;
    procedure initialize (self : access queue);
    procedure finalize (self : access queue);
    procedure enqueue
        (self : access queue; new_node : gp_list_node_ptr);
    function dequeue (self : access queue)
        return gp_list_node_ptr;
private
    type queue is new list with null record;
end gp_list.queue;
