#include <iostream>
using namespace std;

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* resultHead = new ListNode();
        ListNode* current = resultHead;
        int carry = 0;

        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry;
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next;
            }

            carry = sum / 10;
            current->next = new ListNode(sum % 10);
            current = current->next;
        }

        return resultHead->next;
    }
};

// Test the solution
int main() {
    // Create first linked list: 2 -> 4 -> 3 (represents 342)
    ListNode* l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

    // Create second linked list: 5 -> 6 -> 4 (represents 465)
    ListNode* l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    Solution sol;
    ListNode* result = sol.addTwoNumbers(l1, l2);

    // Print the result linked list: 7 -> 0 -> 8 (represents 807)
    while (result != nullptr) {
        cout << result->val;
        if (result->next != nullptr) cout << " -> ";
        result = result->next;
    }
    cout << endl;

    return 0;
}

// Submission link:
// https://leetcode.com/problems/add-two-numbers/submissions/1651158766/

