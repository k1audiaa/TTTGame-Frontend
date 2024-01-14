import { mount } from '@vue/test-utils';
import LogOutButton from '../../components/LogOutButton.vue'; // Replace with the correct path
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

describe('LogOutButton.vue', () => {
    it('logs out the user when the button is clicked', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(LogOutButton, {
            global: {
                plugins: [router],
            },
        });

        const consoleLogSpy = vi.spyOn(console, 'log');

        localStorage.setItem('userId', '1');
        localStorage.setItem('username', 'TestUser');
        localStorage.setItem('points', '100');
        localStorage.setItem('level', '1');

        await wrapper.find('.logout-button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(router.currentRoute.value.path).toBe('/');

        expect(localStorage.getItem('userId')).toBeNull();
        expect(localStorage.getItem('username')).toBeNull();
        expect(localStorage.getItem('points')).toBeNull();
        expect(localStorage.getItem('level')).toBeNull();

        expect(consoleLogSpy).toHaveBeenCalledWith('User logged out successfully');
    });
});

















